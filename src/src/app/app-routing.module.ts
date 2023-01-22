import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MainPageComponent } from './main-page/main-page.component';
// import { ProductPageComponent } from './product-page/product-page.component';
import { MainLayoutComponent } from './admin/shared/main-layout/main-layout.component';
import { BurgersPageComponent } from './admin/burgers-page/burgers-page.component';
import { CoffeePageComponent } from './admin/coffee-page/coffee-page.component';
import { SodaPageComponent } from './admin/soda-page/soda-page.component';


const routes: Routes = [
  {
    path: '', component:MainLayoutComponent,children:[
      {path:'', redirectTo: '/', pathMatch: 'full'},
      {path:'',component: MainPageComponent},
      {path:'product/:id', component: BurgersPageComponent},
      {path:'product/:id', component: SodaPageComponent},
      {path:'product/:id', component: CoffeePageComponent},
      {path:'cart', component: CartPageComponent}
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// <router-outlet></router-outlet>
