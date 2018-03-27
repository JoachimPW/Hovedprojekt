import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../services/category.service';
import { Category } from './category';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {
  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

}
