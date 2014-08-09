from django.db import models

# Create your models here.
class Recipe(models.Model):
  def __str__(self):
    return self.name

  name = models.CharField(max_length=128)
  created = models.DateTimeField(auto_now_add=True)
  description = models.TextField()
  servings = models.PositiveIntegerField(null=True)
  ingredients = models.TextField()
  instructions = models.TextField()

# need to hook this up later
class User(models.Model):
  def __str__(self):
    return self.name

  name = models.CharField(max_length=128)
  password = models.CharField(max_length=128)
