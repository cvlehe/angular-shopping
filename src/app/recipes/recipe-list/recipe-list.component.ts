import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output("onRecipeItemClicked") recipeClickedEmitter = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
    'test recipe',
    'this is a test',
    'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg'),
    new Recipe(
      'test recipe2',
      'this is a test2',
      'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  recipeItemClicked (recipe:Recipe) {
    this.recipeClickedEmitter.emit(recipe);
  }

}
