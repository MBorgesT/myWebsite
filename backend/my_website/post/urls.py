from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('get_post_by_id/', views.get_post_by_id),
    path('get_post_page/', views.get_post_page),
    path('get_post_count/', views.get_post_count),
    path('get_post_page_by_topic/', views.get_post_page_by_topic),
    path('get_post_count_by_topic/', views.get_post_count_by_topic)
]
