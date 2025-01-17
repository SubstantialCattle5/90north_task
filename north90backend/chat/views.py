from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .forms import UserRegistrationForm
from django.contrib.auth.models import User
from django.http import JsonResponse

from .models import Message


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Registration successful. You can now log in.")
            return redirect("login")
        else:
            messages.error(request, "Error during registration. Please correct the issues.")
    else:
        form = UserRegistrationForm()
    return render(request, "chat/register.html", {"form": form})


@login_required
def chat_view(request):
    users = User.objects.all()
    return render(request, 'chat/chat.html', {'users': users})


@login_required
def get_chat(request, user_id):
    try:
        other_user = get_object_or_404(User, id=user_id)
        
        messages = Message.objects.filter(
            (Q(sender=request.user) & Q(receiver=other_user)) |
            (Q(sender=other_user) & Q(receiver=request.user))
        ).order_by('timestamp')
        
        message_data = [{
            'sender': message.sender.id,  
            'receiver': message.receiver.id, 
            'sender_name': message.sender.username,  
            'receiver_name': message.receiver.username,  
            'message': message.message,
            'timestamp': message.timestamp.isoformat()
        } for message in messages]
        
        data =  JsonResponse({
            'other_user': {
                'id': other_user.id,
                'username': other_user.username
            },
            'messages': message_data
        })
        print(data)
        return data
        
    except User.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)
