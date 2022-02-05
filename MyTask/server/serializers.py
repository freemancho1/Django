from dataclasses import fields
from rest_framework import serializers 
from django.contrib.auth.models import User

from .models import Task 


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'  # 'url' + db column
        
        
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User 
        fields = ['url', 'username', 'email', 'groups']