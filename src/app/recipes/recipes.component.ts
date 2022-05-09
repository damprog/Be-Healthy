import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  xs: number[] = [
    1,2,3,4
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
