import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.product = history.state;

    console.log(this.product.images);
  }
  addProductToCart(product: Product, quantity: string) {
    let quant: number = Number(quantity);
    this.cartService.addToCart(product, quant);
    window.alert('Your product has been added to the cart!');
  }
}
