
from django.shortcuts import render
from rest_framework import generics
from .serializers import StuSerializer
from .models import Student

class StuView(generics.ListCreateAPIView):
    serializer_class=StuSerializer
    queryset=Student.objects.all()

class StuUpdate(generics.RetrieveUpdateAPIView):
    serializer_class=StuSerializer
    queryset=Student.objects.all()

class StuDelete(generics.RetrieveDestroyAPIView):
    serializer_class=StuSerializer
    queryset=Student.objects.all()

# Create your views here.
