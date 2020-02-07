from django.http import JsonResponse
from django.shortcuts import render, reverse, redirect, get_object_or_404
from .models import userPlant

# view for profile that will return a users plant list
def profile(request):
    userPlants = userPlant.objects.filter(user=request.user).values()
    context = {'userPlants': userPlants}
    return render(request, 'profile.html', context)

# view for charting data
def chartData(request):
    userPlants = userPlant.objects.filter(user=request.user).values()

    data = {
        'userPlants':list(userPlants)
    }
    return JsonResponse(data) 

# view for deleting userPlant item
def deleteUserPlant(request, userPlantId):
    plantId = get_object_or_404(userPlant, id=userPlantId)
    plantId.delete()
    return redirect('http://127.0.0.1:8000/profile')

def editUserPlant(request, userPlantId):
    plantId = get_object_or_404(userPlant, id=userPlantId)

    numberOfPlant = request.POST['numberOfPlant']

    updatePlant = userPlant.objects.filter(pk=userPlantId)
    updatePlant.update(numberOfPlant=numberOfPlant)
    
    return redirect('http://127.0.0.1:8000/profile')



# view for adding custom userPlant
def customUserPlant(request):
    user = request.user
    scientificNameAuthor = request.POST.get('scientificNameAuthor')
    print(scientificNameAuthor)
    nationalCommonName = request.POST.get('nationalCommonName')
    family = request.POST.get('family') 
    nativeState = request.POST.get('nativeState')
    isInvasive = 'UNKNOWN'
    numberOfPlant = request.POST.get('numberOfPlant')

    userPlant.objects.create(user=user, scientificNameAuthor=scientificNameAuthor, nationalCommonName=nationalCommonName, family=family, nativeState=nativeState, isInvasive=isInvasive, numberOfPlant=numberOfPlant)

    return redirect('http://127.0.0.1:8000/profile')


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