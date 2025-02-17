import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../../services/adminservice.service';
import { initFlowbite } from 'flowbite';
import BASE_URL from '../../../helper/helper';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements  OnInit {

  
  isModalOpen = false;
  productForm: FormGroup;
  products: any[] = []; // Store products here

  constructor(private fb: FormBuilder, private adminService: AdminserviceService) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(1)]],
      date: ['', Validators.required],
      file: [null, Validators.required]
    });
  }
 
  ngOnInit() {
    initFlowbite();
    this.loadProducts(); // Load products on component init

  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  closeModalOutside(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.productForm.patchValue({
        file: event.target.files[0]
      });
    }
  }

  saveProduct() {
    if (this.productForm.invalid) {
      alert('Please fill all required fields correctly.');
      return;
    }

    const formData = new FormData();
    formData.append('productName', this.productForm.get('productName')?.value);
    formData.append('quantity', this.productForm.get('quantity')?.value);
    formData.append('price', this.productForm.get('price')?.value);
    formData.append('date', this.productForm.get('date')?.value);
    formData.append('file', this.productForm.get('file')?.value);

    this.adminService.addProduct(formData).subscribe({
      next: (response) => {
        console.log('Product added successfully:', response);
        this.closeModal();
      },
      error: (error) => console.error('Error adding product:', error),
    });
  }
 


  loadProducts() {
    this.adminService.getAllProducts().subscribe({
      next: (response) => {
        console.log('Products Response:', response); 
        this.products = response.map(product => ({
          ...product,
          imageUrl: product.productImage 
        }));
      },
      error: (error) => console.error('Error fetching products:', error),
    });
  }
  
  
  deleteProduct(productId: any) {
    console.log("Received Product ID =>", productId); // Debugging log
    if (!productId) {
        console.error("Product ID is undefined or invalid:", productId);
        return;
    }

    this.adminService.deleteProduct(productId).subscribe(
        response => {
            console.log("Product deleted successfully", response);
            this.loadProducts(); // Refresh the list
        },
        error => console.error("Error deleting product:", error)
    );
}





  
}
  

