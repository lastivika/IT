import { Component, Input } from '@angular/core';
import { burgers } from 'src/app/product-page/product';
import { IProduct } from 'src/app/product-page/product-interface';
//import { products as rings } from './product';     //можна собі перейменувати по своєму

@Component({
  selector: 'app-burgers-page',
  templateUrl: './burgers-page.component.html',
  styleUrls: ['./burgers-page.component.scss']
})
export class BurgersPageComponent {
  burgers: IProduct[] = burgers

  // @Input()  product: IProduct | undefined
} 
