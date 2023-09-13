import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent {
  @Input() product!: Product
  @HostBinding('atr.class') cssClass='ui small image'
}
