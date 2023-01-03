import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
//import { DetailProductComponent } from './detail-product/detail-product.component';
//import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'products', component: ListProductsComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent,
    data: { product: 'product' },
  },
  // { path: 'details/:id', component: DetailProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
