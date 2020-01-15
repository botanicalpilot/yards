from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class CustomUser(AbstractUser):
    bio = models.TextField(max_length=1000, null=True, blank=True,)
    location = models.CharField(max_length=50, blank=True)
    # I want to have a plantlist field below, but am unsure how to accomplish this. 
    # plantList = 

    def __str__(self):
        return self.username
