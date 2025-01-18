from django.urls import re_path

from chat.comsumer import ChatConsumer

websocket_urlpatterns = [
    re_path(r'wss/chat/(?P<sender_id>\d+)(?P<receiver_id>\d+)/$', ChatConsumer.as_asgi()),
]
