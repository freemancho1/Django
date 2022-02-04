from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=200, null=False)
    memo = models.CharField(max_length=1000, null=True)
    created = models.DateTimeField(auto_now_add=True)
    is_delete = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-id']

    def __repr__(self):
        return f'<Task: ({self.id}) {self.title}'