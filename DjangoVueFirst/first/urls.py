from django.urls import path
from first.views import *

app_name = 'first'
urlpatterns = [
    path('', index, name='index'),
]
