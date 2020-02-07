from django.urls import path

from .import views
from django.views.generic.base import TemplateView

app_name='yardsApp'

urlpatterns = [
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
    path('newUserPlant', views.newUserPlant, name='newUserPlant'),
    path('profile/', views.profile, name='profile'),
    path('data/', views.chartData, name='chartData'),
    path('<int:userPlantId>/delete', views.deleteUserPlant, name='deleteUserPlant'),
    path('profile/editUserPlant/<int:userPlantId>', views.editUserPlant, name='editUserPlant'),
    path('profile/customUserPlant', views.customUserPlant, name='customUserPlant'),
]