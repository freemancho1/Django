from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoObjectPermissions

from .serializers import *


class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all().order_by('id')
    serializer_class = TaskSerializer
    
    
class UserViewSet(ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    # permission_classes = [DjangoObjectPermissions]