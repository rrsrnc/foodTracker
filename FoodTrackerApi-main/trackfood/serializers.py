from .models import Event, Donation, User
from rest_framework import serializers

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id','title','date','time','location','contactPerson','contactDetail','description']

class DonationSerializer(serializers.ModelSerializer):
    event = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = Donation
        fields = ['id','donor','food_type','quantity','event']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','phone','first_name','last_name']

