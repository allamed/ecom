import { Component } from '@angular/core';
//import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  allProducts: Product[] = [];
  products: Product[] = this.allProducts;
  searchText = '';
  categories!: Array<any>;
  productsJson = new ProductsService(this.http);

  getAllProducts = () => {
    this.productsJson.getProducts().subscribe((data) => {
      this.allProducts = data.products;
      this.products = this.allProducts;
      console.log(this.products);
      this.categories = Array.from(
        new Set(
          this.allProducts.map((p) => {
            return p.category;
          })
        )
      );
      console.log(this.categories);
    });
  };
  ngOnInit() {
    this.getAllProducts();
  }

  constructor(
    /* private cartService: CartService, */ private http: HttpClient
  ) {}

  /* addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  } */
  detectChanges(event: any) {
    let value = event.target.value; // on a le mot de categorie
    if (value == 'all') {
      this.products = this.allProducts;
    } else {
      this.products = this.allProducts.filter((p) => p.category == value);
    }
  }
}
