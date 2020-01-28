from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class CustomUser(AbstractUser):
    
    class stateList(models.TextChoices):
        Alabama = 'Alabama',
        Alaska = 'Alaska'
        Arizona = 'Arizona'
        Arkansas = 'Arkansas'
        California = 'California'
        Colorado = 'Colorado'
        Connecticut = 'Connecticut'
        Delaware = 'Delaware'
        District_of_Columbia = 'District of Columbia'
        Florida = 'Floride'
        Georgia = 'Georgia'
        Hawaii = 'Hawaii'
        Idaho = 'Idago'
        Illinois ='Illinois'
        Indiana = 'Indiana'
        Iowa = 'Iowa'
        Kansas = 'Kansas'
        Kentucky = 'Kentucky'
        Louisiana = 'Louisiana'
        Maine = 'Maine'
        Maryland = 'Maryland'
        Massachusetts = 'Massachusetts'
        Michigan = 'Michigan'
        Minnesota = 'Minnesota'
        Mississippi = 'Mississippi'
        Missouri = 'Missouri'
        Montana = 'Montana'
        Nebraska = 'Nebraska'
        Nevada = 'Nevada'
        New_Hampshire = 'New Hampshire'
        New_Jersey = 'New Jersey'
        New_Mexico = 'New Mexico'
        New_York = 'New York'
        North_Carolina = 'North Carolina'
        North_Dakota = 'North Dakota'
        Ohio = 'Ohio'
        Oklahoma = 'Oklahoma'
        Oregon = 'Oregon'
        Pennsylvania = 'Pennsylvania'
        Rhode_Island = 'Rhode Island'
        South_Carolina = 'South Carolina'
        South_Dakota = 'South Dakota'
        Tennessee = 'Tennessee'
        Texas = 'Texas'
        Utah = 'Utah'
        Vermont = 'Vermont'
        Virginia = 'Virginia'
        Washington = 'Washington'
        West_Virginia = 'West Virginia'
        Wisconsin = 'Wisconsin'
        Wyoming = 'Wyoming'

    bio = models.TextField(max_length=1000, null=True, blank=True,)
    location = models.CharField(max_length=50, choices = stateList.choices)


    def __str__(self):
        return self.username
