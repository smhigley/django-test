from django import forms
import datetime

class RecipeForm(forms.Form):
  name = forms.CharField(label='name')
  description = forms.CharField(label='description', widget=forms.Textarea)
  servings = forms.IntegerField(label='servings')
  ingredients = forms.CharField(label='ingredients', widget=forms.Textarea)
  instructions = forms.CharField(label='instructions', widget=forms.Textarea)
