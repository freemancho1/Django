from rest_framework.viewsets import ModelViewSet

from . serializers import SimpleTodo, SimpleTodoSerializer


class SimpleTodoViewSet(ModelViewSet):
  queryset = SimpleTodo.objects.filter(is_deleted=False)
  serializer_class = SimpleTodoSerializer