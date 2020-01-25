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
    symbol = models.CharField(max_length=15, blank=True, default='', null=True)
    synonymSymbol = models.CharField(max_length=15, blank=True, default='', null=True)
    scientificNameAuthor = models.CharField(max_length=500, blank=True, default='', null=True )
    nationalCommonName = models.CharField(max_length=500, blank=True, default='', null=True)
    family = models.CharField(max_length=250, blank=True, default='', null=True)
    nativeState = models.CharField(blank=True, max_length=100, null=True)
    isInvasive = models.CharField(max_length=20, blank=True, null=True)