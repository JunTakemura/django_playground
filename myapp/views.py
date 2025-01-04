from django.shortcuts import render, redirect
from .models import Post

# Create your views here.

def index(request):
    posts = Post.objects.all().order_by('-id')
    return render(request, 'myapp/index.html', {'posts': posts})

def create_post(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')
        Post.objects.create(title=title, content=content)
        return redirect('index')
    return redirect('index')
