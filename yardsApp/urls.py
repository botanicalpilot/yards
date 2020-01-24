from django.urls import path

from .import views

app_name='yardsApp'

urlpatterns = [
    # path('', views.index, name = 'index')
    path('newUserPlant', views.newUserPlant, name='newUserPlant')
]