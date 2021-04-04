from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.index),
    path('posts/get_post_page/', views.get_post_page),
    path('posts/get_post_count/', views.get_post_count)
]
