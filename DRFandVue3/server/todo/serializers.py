from rest_framework import serializers

from . models import SimpleTodo


class SimpleTodoSerializer(serializers.ModelSerializer):
  class Meta:
    model = SimpleTodo
    fields = '__all__'
