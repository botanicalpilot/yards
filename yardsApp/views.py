
from django.shortcuts import render, reverse, redirect, get_object_or_404
from .models import userPlant

# Create your views here.
def newUserPlant(request):
    user = request.user 
    scientificNameAuthor = request.POST.get('scientificNameAuthor')
    print(scientificNameAuthor)
    nationalCommonName = request.POST.get('nationalCommonName')
    family = request.POST.get('family') 
    nativeState = request.POST.get('nativeState')
    isInvasive = request.POST.get('isInvasive') 

    

    userPlant.objects.create(user=user, scientificNameAuthor=scientificNameAuthor, nationalCommonName=nationalCommonName, family=family, nativeState=nativeState, isInvasive=isInvasive)

    
    return redirect('http://127.0.0.1:8000/profile')