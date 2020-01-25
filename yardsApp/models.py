from django.db import models
from users.models import CustomUser




# Create your models here.
class userPlant(models.Model):
    # create many to one relationship
    user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE, 
    )
    # items from API
    symbol = models.CharField(max_length=15, blank=True, default='')
    synonymSymbol = models.CharField(max_length=15, blank=True, default='')
    scientificNameAuthor = models.CharField(max_length=500, blank=True, default='' )
    nationalCommonName = models.CharField(max_length=500, blank=True, default='')
    family = models.CharField(max_length=250, blank=True, default='')
    nativeState = models.CharField(blank=False, max_length=100, default='')
    isInvasive = models.CharField(max_length=20, blank=True, default='')