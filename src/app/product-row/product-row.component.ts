import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent {
  @Input() product!: Product
  @HostBinding('attr.class') cssClass= 'item'
  isClassAdded: boolean = false

  addClass() {
    this.isClassAdded = !this.isClassAdded
  }
}
