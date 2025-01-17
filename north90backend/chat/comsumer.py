from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer
from django.contrib.auth import get_user_model
from chat.models import Message
import json

User = get_user_model()


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # Get the sender and receiver from the URL parameters
        self.sender_id = self.scope['url_route']['kwargs']['sender_id']
        self.receiver_id = self.scope['url_route']['kwargs']['receiver_id']

        # Ensure the room name is the same no matter the sender/receiver order
        self.room_name = f"chat_{min(self.sender_id, self.receiver_id)}_{max(self.sender_id, self.receiver_id)}"

        # Add the user to the group
        await self.channel_layer.group_add(
            self.room_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave the room group
        await self.channel_layer.group_discard(
            self.room_name,
            self.channel_name
        )

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data['message']

        # Save the message to the database asynchronously
        msg = await self.save_message(self.sender_id, self.receiver_id, message)

        # Broadcast message to the group
        await self.channel_layer.group_send(
            self.room_name,
            {
                'type': 'chat_message',
                'sender': self.sender_id,
                'receiver': self.receiver_id,
                'message': msg.message  # Send the saved message
            }
        )

    async def chat_message(self, event):
        # Send message back to WebSocket
        await self.send(text_data=json.dumps({
            'sender': event['sender'],
            'receiver': event['receiver'],
            'message': event['message']
        }))

    # Save the message to the database asynchronously
    @database_sync_to_async
    def save_message(self, sender_id, receiver_id, message):
        sender = User.objects.get(id=sender_id)
        receiver = User.objects.get(id=receiver_id)
        msg = Message(sender=sender, receiver=receiver, message=message)
        msg.save()
        return msg
