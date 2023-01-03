import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() isCart = false;
  @Input() product: any;
  @Input() prodItem: any;

  @Output() productAdded = new EventEmitter();
  @Output() productRemoved = new EventEmitter();
  showFormFlag = false;
  showForm() {
    this.showFormFlag = true;
  }
  hideForm() {
    this.showFormFlag = false;
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService, //public dialog: MatDialog
    private router: Router
  ) {}

  addProductToCart(product: Product, quantity: string) {
    let quant: number = Number(quantity);
    this.cartService.addToCart(product, quant);
    window.alert('Your product has been added to the cart!');
  }

  removeProductFromCart(product: Product) {
    this.cartService.removeItem(product);
    window.alert('Your product has been removed from the cart!');
  }

  /* openDialog(product: Product) {
    console.log(product);
   // const dialogConfig = new MatDialogConfig();
    //dialogConfig.width = '500px';
    //dialogConfig.height = '600px';
    dialogConfig.position = {
      top: '50vh',
      left: '50vw',
    };
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'panelClass';
    dialogConfig.backdropClass = 'backdropClass';
    dialogConfig.data = {
      title: product.title,
      images: product.images,
      description: product.description,
    };

    this.dialog.open(DialogComponent, dialogConfig);
  } */
}
