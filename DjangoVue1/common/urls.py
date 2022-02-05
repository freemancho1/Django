from django.urls import path
from common.views import *

app_name = 'common'
urlpatterns = [
    path('', start, name='start'),
]
