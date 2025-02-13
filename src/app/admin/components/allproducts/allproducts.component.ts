import { Component } from '@angular/core';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {
  
  isModalOpen = false; // Keep modal closed initially
  productName: string = '';
  productPrice: number | null = null;
  productDate: string = '';
  selectedFile: File | null = null;

  openModal() {
    this.isModalOpen = true; // Open modal only when the button is clicked
  }

  closeModal() {
    this.isModalOpen = false; // Close modal
  }

  // Close modal when clicking outside
  closeModalOutside(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  saveProduct() {
    console.log("Product Saved:", {
      name: this.productName,
      price: this.productPrice,
      date: this.productDate,
      file: this.selectedFile,
    });

    // Close the modal after saving
    this.closeModal();
  }
}
