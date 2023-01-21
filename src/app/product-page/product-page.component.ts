import { Component, Input } from '@angular/core';
import { products } from './product';
import { IProduct } from './product-interface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  products: IProduct[] = products

  @Input() product!: IProduct | undefined
}
