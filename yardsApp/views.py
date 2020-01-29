
from django.shortcuts import render, reverse, redirect, get_object_or_404
from .models import userPlant

# view for profile that will return a users plant list
def profile(request):
    userPlants = userPlant.objects.filter(user=request.user).values()
    print('HIIII')
    print(userPlants)
    context = {'userPlants': userPlants}
    return render(request, 'profile.html', context)


# request a plant returned from search function be added to user's userPlant model 
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