from django.db import models


class SimpleTodo(models.Model):
  title = models.CharField(max_length=255)
  creation_date = models.DateTimeField(auto_now_add=True)
  is_completed = models.BooleanField(default=False)
  is_deleted = models.BooleanField(default=False)

  class Meta:
    ordering = ('-creation_date',)

  def __str__(self):
    return f'SimpleTodo({self.id}, {self.title})'