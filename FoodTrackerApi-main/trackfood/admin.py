from django.contrib import admin
from .models import Event,Donation,User
# Register your models here.

admin.site.register(Event)
admin.site.register(Donation)
admin.site.register(User)

