import { Component, OnInit, Input } from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {Product} from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers:  [ ProductsService ]
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  products: Product[];

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy() {
    console.log(this.product);
    console.log('The item was added to the your basket');
    this.cartService.onProductAdded(this.product);
  }

}
