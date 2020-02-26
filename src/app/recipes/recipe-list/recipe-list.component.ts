import { Component, OnInit } from "@angular/core";
import { Recipe } from "../rtecipe.model";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "this is a dummy recipe",
      "https://assets3.thrillist.com/v1/image/2848840/size/gn-gift_guide_variable_c.jpg"
    )
  ];

  recipeForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    imgPath: new FormControl("")
  });

  constructor() {}

  addRecipe() {
    this.recipes.push(
      new Recipe(
        this.recipeForm.value.name,
        this.recipeForm.value.description,
        this.recipeForm.value.imgPath
      )
    );
  }

  ngOnInit(): void {}
}
