from django.db import models

# Create your models here.
class Technology(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.name 

class Role(models.Model):
    role_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    technologies = models.ManyToManyField(Technology)

    def __str__(self) -> str:
        return self.name