import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  @Input() productList!: Product[]
  @Output() onProductSelected: EventEmitter<Product>

  constructor() {
    this.onProductSelected = new EventEmitter();
  } 
}
