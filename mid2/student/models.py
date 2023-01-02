from django.db import models

class Student (models.Model):
    name = models.CharField(max_length=20)
    grade=models.CharField(max_length=2)


    def __str__(self):
        return self.name
# Create your models here.
