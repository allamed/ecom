import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductQuantity } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items: ProductQuantity[] = this.cartService.getItems();

  constructor(private cartService: CartService) {}

  getSumPrice() {
    return this.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }

  getTotalItems() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }
}
