from rest_framework.viewsets import ModelViewSet
from .serializers import Task, TaskSerializer


class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all().order_by('id')
    serializer_class = TaskSerializer
    