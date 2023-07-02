from django.db import models

# Create your models here.

class Event(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField(auto_now=False, blank=False)
    time = models.TimeField(auto_now=False, blank=False)
    location = models.CharField(max_length=200)
    contactPerson = models.CharField(max_length=200)
    contactDetail = models.CharField(max_length=10, null=False, default='9996234567')
    description = models.TextField() 
    

class Donation(models.Model):
    wedding = models.ForeignKey(Event, on_delete=models.CASCADE)
    donor = models.CharField(max_length=255)
    food_type = models.CharField(max_length=255)
    quantity = models.IntegerField()

class User(models.Model):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=10, null=False, default='0000000000')
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)