import { Component, EventEmitter, Input, Output, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  @Input() productList!: Product[]
  @Output() onProductSelected: EventEmitter<Product>

  private currentProduct!: Product

  constructor() {
    this.onProductSelected = new EventEmitter();
  } 

  clicked(product: Product): void {
    this.currentProduct = product
    this.onProductSelected.emit(product)
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false
    }
    return product.sku === this.currentProduct.sku
  }
}
