from django.db import models

class Employee (models.Model):
    id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    department=models.CharField(max_length=20)


    def __str__(self):
        return self.name

# Create your models here.
