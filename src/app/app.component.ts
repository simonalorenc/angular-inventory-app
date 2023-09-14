import { Component, EventEmitter, HostBinding } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  products: Product[]

  constructor() {
    this.products = [
      new Product(
        "MYSHOES",
        "Black Running Shoes",
        "/assets/images/products/black-shoes.webp",
        ["Men", "Shoes", "Running Shoes"],
        109.99
      ),
      new Product(
        "NEATOJACKET",
        "Blue Jacket",
        "/assets/images/products/blue-jacket.jpeg",
        ["Women", "Apparel", "Jackets & Vests"],
        239.99
      ),
      new Product(
        "NICEHAT",
        "A Nice Black Hat",
        "/assets/images/products/black-hat.jpeg",
        ["Women", "Accessories", "Hats"],
        29.99
      )
    ]
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product)
  }
}
