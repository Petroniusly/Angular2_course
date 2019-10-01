import { Injectable } from '@angular/core';
import { Product } from '../../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  soldProducts: Product[];

  constructor() {
    this.soldProducts = [];
  }

  onProductAdded(product: Product) {
    this.soldProducts.push(product);
  }
}
