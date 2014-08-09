from django.shortcuts import render, HttpResponse
from recipes.models import Recipe

# Create your views here.
def recipe_list(response):
  recipelist = Recipe.objects.all()
  context = {'recipelist': recipelist}
  return render(response, 'recipelist.html', context)
