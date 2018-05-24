import { Injectable } from '@angular/core';

import { CATEGORIES } from '../left-sidebar/categories/categories'
import { Category } from '../left-sidebar/categories/category'

import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoryService {

  getCategories(): Observable<Category[]> {
    return Observable.of(CATEGORIES);
  };
}
