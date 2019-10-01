import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Output() soldItems: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.soldItems = this.cartService.soldProducts;
  }

  isNotEmptyList(): boolean {
    console.log(this.soldItems)
    return this.soldItems.length !== 0;
  }

}
