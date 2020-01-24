from django.shortcuts import render
from django.shortcuts import render, reverse, redirect, get_object_or_404
from .models import userPlant

# Create your views here.
def newUserPlant(request):
    user = request.POST['user'] 
    scientificNameAuthor = request.POST['scientificNameAuthor'] 
    nationalCommonName = request.POST['nationalCommonName']
    family = request.POST['family'] 
    nativeState = request.POST['nativeState'] 
    isInvasive = request.POST['isInvasive'] 

    postItem = userPlant.objects.create(user=user, scientificNameAuthor=scientificNameAuthor, nationalCommonName=nationalCommonName, family=family, nativeState=nativeState, isInvasive=isInvasive)

    postItem.save()
    return redirect('http://127.0.0.1:8000/profile')