from django.urls import path
from .views import snippet_detail, snippet_list


urlpatterns = [
    path('', snippet_list),
    path('<int:pk>/', snippet_detail),
]