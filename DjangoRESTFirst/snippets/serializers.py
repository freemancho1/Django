from dataclasses import fields
from tkinter.ttk import Style
from django.contrib.auth.models import User, Group
from importlib_metadata import requires
from rest_framework import serializers

from .models import Snippet, LANGUAGE_CHOICES, STYLE_CHOICES


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User 
        fields = ['url', 'username', 'email', 'groups']
        
        
class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group 
        fields = ['url', 'name']
        
        
class SnippetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Snippet
        fields = ['id', 'title', 'code', 'linenos', 'language', 'style']
        # Add all fields in the model.
        # fields = '__all__' 
        