# Generated by Django 4.1.4 on 2022-12-30 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='profession',
            field=models.CharField(max_length=20),
        ),
    ]
