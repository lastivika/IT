// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { MainLayoutComponent } from './admin/shared/main-layout/main-layout.component';
// import { MainPageComponent } from './main-page/main-page.component';
// import { ProductPageComponent } from './product-page/product-page.component';
// import { CartPageComponent } from './cart-page/cart-page.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     MainLayoutComponent,
//     MainPageComponent,
//     ProductPageComponent,
//     CartPageComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }







// --------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './admin/shared/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
// import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { BurgersPageComponent } from './admin/burgers-page/burgers-page.component'
import { SodaPageComponent } from './admin/soda-page/soda-page.component';
import { CoffeePageComponent } from './admin/coffee-page/coffee-page.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    // ProductPageComponent,
    CartPageComponent,
    BurgersPageComponent,
    SodaPageComponent,
    CoffeePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
