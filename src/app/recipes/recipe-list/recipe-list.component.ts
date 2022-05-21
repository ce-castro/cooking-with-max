import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Just another test recipe', 'https://cdn.shopify.com/s/files/1/0280/0130/4716/files/gnubees-banana-chocolate-muffins_480x480.jpg?v=1617910866'),
    new Recipe('Another Test recipe', 'Just another test recipe', 'https://cdn.shopify.com/s/files/1/0280/0130/4716/files/gnubees-banana-chocolate-muffins_480x480.jpg?v=1617910866')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
