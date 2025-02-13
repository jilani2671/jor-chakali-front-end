import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';





@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})



export class ClientsComponent implements OnInit {
  locationId!: number;
  shops: any[] = [];


  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  isModalOpen = false;
  shopName: string = '';
  address: string = '';
  mobileNo: string = '';

 



    ngOnInit(): void {
      
      initFlowbite();

      this.route.params.subscribe(params => {
        this.locationId = params['locationId'];
        if (this.locationId) {
          this.fetchShops();
        }
      });
    }

    




  // Open the modal
  openModal(): void {
    this.isModalOpen = true;
  }

  // Close the modal
  closeModal(): void {
    this.isModalOpen = false;
  }

  // Handle outside click to close modal
  outsideClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }


  // Save the area/shop
  saveArea(): void {
    if (this.shopName && this.address && this.mobileNo) {
      // Logic to save the area data, for example, making an API call
      console.log('Saving Area:', { shopName: this.shopName, address: this.address, mobileNo: this.mobileNo });
      
      // After saving, close the modal
      this.closeModal();
      
      // Optionally clear the form fields
      this.shopName = '';
      this.address = '';
      this.mobileNo = '';
    } else {
      alert('Please fill in all fields');
    }
  }

  // Handle delete button click for a shop
  deleteShop(shopId: number): void {
    // Logic to delete the shop
    console.log('Deleting shop with ID:', shopId);
  }



  fetchShops(): void {
    this.http.get(`http://localhost:8080/shop/by-location/${this.locationId}`).subscribe({
      next: (response: any) => {
        this.shops = response;
      },
      error: err => {
        console.error('Error fetching shops:', err);
      }
    });
  }

  
}
