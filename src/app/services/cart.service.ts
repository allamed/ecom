import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

export class ProductQuantity {
  product!: Product;
  quantity!: number;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: ProductQuantity[] = [];

  addToCart(product: Product, quantity: number) {
    let p: ProductQuantity = new ProductQuantity(product, quantity);
    this.items.push(p);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeItem(product: Product) {
    this.items = this.items.filter((item) => item.product.id != product.id);
  }
}
