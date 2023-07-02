from django.shortcuts import render
from .serializers import EventSerializer,DonationSerializer,UserSerializer
from django.http import Http404
from .models import Event,Donation,User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class EventList(APIView):
    """
    List all Donations, or create a new Donation.
    """
    def get(self, request, format=None):
        Donations = Event.objects.all()
        serializer = EventSerializer(Donations, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EventDetail(APIView):
    """
    Retrieve, update or delete a Donation instance.
    """
    def get(self, request, format=None):
        Event = Event.objects.all()
        serializer = EventSerializer(Event, many=True)
        return Response(serializer.data)

    def get_object(self, pk):
        try:
            return Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        Event = self.get_object(pk)
        serializer = EventSerializer(Event)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        Event = self.get_object(pk)
        serializer = EventSerializer(Event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        Event = self.get_object(pk)
        Event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# class-based view of Donation

class DonationList(APIView):
    """
    List all Donations, or create a new Donation.
    """
    def get(self, request, format=None):
        Donations = Donation.objects.all()
        serializer = DonationSerializer(Donations, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DonationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class DonationDetail(APIView):
    """
    Retrieve, update or delete a Donation instance.
    """
    def get_object(self, pk):
        try:
            return Donation.objects.get(pk=pk)
        except Donation.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        Donation = self.get_object(pk)
        serializer = DonationSerializer(Donation)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        Donation = self.get_object(pk)
        serializer = DonationSerializer(Donation, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        Donation = self.get_object(pk)
        Donation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

# class based view of User

class UserList(APIView):
    """
    List all Users, or create a new User.
    """
    def get(self, request, format=None):
        Users = User.objects.all()
        serializer = UserSerializer(Users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetail(APIView):
    """
    Retrieve, update or delete a User instance.
    """
    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        User = self.get_object(pk)
        serializer = UserSerializer(User)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        User = self.get_object(pk)
        serializer = UserSerializer(User, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        User = self.get_object(pk)
        User.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)