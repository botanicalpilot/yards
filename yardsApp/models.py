from django.db import models

# Create your models here.
# class userPlantList(models.Model):
#     # create many to one relationship
#     user = models.ForeignKey(
#         users.CustomUser,
#         on_delete=models.CASCADE, 
#     )
#     # items from API
#     symbol = models.CharField(max_length=15, blank=True, default='')
#     synonymSymbol = models.CharField(max_length=15, blank=True, default='')
#     scientificNameAuthor = models.CharField(max_length=500, blank=True, default='' )
#     nationalCommonName = models.CharField(max_length=500, blank=True, default='')
#     family = models.CharField(max_length=250, blank=True, default='')
#     nativeState = models.CharField(blank=False, max_length=100)