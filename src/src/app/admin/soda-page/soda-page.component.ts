import { Component, Input } from '@angular/core';
import { soda } from 'src/app/product-page/product';
import { IProduct } from 'src/app/product-page/product-interface';
//import { products as rings } from './product';     //можна собі перейменувати по своєму

@Component({
  selector: 'app-soda-page',
  templateUrl: './soda-page.component.html',
  styleUrls: ['./soda-page.component.scss']
})
export class SodaPageComponent {
  soda: IProduct[] = soda

  // @Input()  product: IProduct | undefined
} 