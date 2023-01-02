from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import TeacherSerializer
from .models import Teacher

class TeacherView(generics.ListCreateAPIView):
    serializer_class=TeacherSerializer
    queryset=Teacher.objects.all()

class TeacherUpdate(generics.RetrieveUpdateAPIView):
    serializer_class=TeacherSerializer
    queryset=Teacher.objects.all()

class TeacherDelete(generics.RetrieveDestroyAPIView):
    serializer_class=TeacherSerializer
    queryset=Teacher.objects.all()
