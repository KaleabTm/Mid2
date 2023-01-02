from django.shortcuts import render
from rest_framework import generics
from .serializers import EmpSerializer
from .models import Employee

class EmpView(generics.ListCreateAPIView):
    serializer_class=EmpSerializer
    queryset=Employee.objects.all()

class EmpUpdate(generics.RetrieveUpdateAPIView):
    serializer_class=EmpSerializer
    queryset=Employee.objects.all()

class EmpDelete(generics.RetrieveDestroyAPIView):
    serializer_class=EmpSerializer
    queryset=Employee.objects.all()




# Create your views here.
