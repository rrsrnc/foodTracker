from django.urls import path
from . import views


urlpatterns = [
    path('weddings/', views.EventList.as_view()),
    path('weddings/<int:pk>/', views.EventDetail.as_view()),
    path('donations/', views.DonationList.as_view()),
    path('donations/<int:pk>/', views.DonationDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
]