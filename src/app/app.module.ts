import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { CartComponent } from './cart/cart.component';

import { RouterModule } from '@angular/router';
//import { DetailProductComponent } from './detail-product/detail-product.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
//import { LoginComponent } from './login/login.component';
//import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListProductsComponent,
    CartComponent,
    ProductItemComponent,
    ProductDetailComponent,
    RegisterComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ListProductsComponent },
      { path: 'cart', component: CartComponent },
      // { path: 'details/:id', component: DetailProductComponent },
      { path: '', component: ListProductsComponent },
    ]),
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
