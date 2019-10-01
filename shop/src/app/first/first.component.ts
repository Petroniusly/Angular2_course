import { Component, OnInit } from '@angular/core';
import { Category } from '../products/interfaces/products-category.interface';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  colors: string[];
  category: Category;
  isAvailable: boolean;
  discount: number;


  constructor() { }

  ngOnInit() {
    this.name = 'Fisrt Item';
    this.description = 'This is a cool item';
    this.price = 23.2;
    this.colors = ['blue', 'red', 'orange'];
    this.category = Category.Wear;
    this.isAvailable = true;
    this.discount = 10;

  }

}
