import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { productList } from '../../mocked-data/products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return productList;
  }
}
