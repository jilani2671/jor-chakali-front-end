import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Router } from '@angular/router';


interface Product {
  name: string;
  quantity: string;
  price: number;
  total: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cart: Product[] = [];
  totalAmount: number = 0;

  ngOnInit(): void {
    initFlowbite();
  }

  // Function to add products to the cart
  addToCart(productName: string, quantity: string, price: number): void {
    let existingProduct = this.cart.find(p => p.name === productName);

    if (existingProduct) {
      existingProduct.total += price; // Increase total price
    } else {
      this.cart.push({ name: productName, quantity, price, total: price });
    }

    this.updateTotalAmount();
  }

  // Function to update the total amount
  updateTotalAmount(): void {
    this.totalAmount = this.cart.reduce((sum, product) => sum + product.total, 0);
  }

  constructor(private router: Router) {}
  navigateToAreas(): void {
    this.router.navigate(['/invoice']);
  }
}
