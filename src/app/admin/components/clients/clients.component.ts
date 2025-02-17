import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  locationId!: number;
  locationName: string = '';
  shops: any[] = [];

  isModalOpen = false;
  

  isopenmodel=true;
   



  
  // Define FormGroup for the shop form
  shopForm = new FormGroup({
    shopName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    mobileNo: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
  });

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    initFlowbite();

    this.route.params.subscribe(params => {
      this.locationId = params['locationId'];
      this.locationName = params['locationName'];

      if (this.locationId) {
        this.fetchLocationName(this.locationId);
        this.fetchShops();
      }
    });
  }

  // Open Modal
  openModal(): void {
    this.isModalOpen = true;
  }

  // Close Modal and Reset Form
  closeModal(): void {
    this.isModalOpen = false;
    this.shopForm.reset();
  }

  // Handle outside click to close modal
  outsideClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  // Fetch shops by location
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

  // Fetch location name
  fetchLocationName(locationId: number): void {
    this.http.get<string>(`/location/${locationId}`).subscribe({
      next: (locationName) => {
        this.locationName = locationName;
      },
      error: (err) => console.error("Error fetching location name:", err)
    });
  }

  // Save new shop
  saveArea(): void {
    if (this.shopForm.valid) {
      const shopData = {
        shopName: this.shopForm.value.shopName,
        contact: this.shopForm.value.mobileNo, // Using mobileNo as contact
        location: { locationId: this.locationId }
      };

      this.http.post(`http://localhost:8080/shop/add`, shopData).subscribe({
        next: () => {
          console.log('Shop added successfully');
          this.fetchShops(); // Refresh the list
          this.closeModal();
        },
        error: (err) => console.error('Error adding shop:', err)
      });
    } else {
      alert('Please fill in all fields correctly');
    }
  }

  // Delete shop
  deleteShop(shopId: number): void {
    this.http.delete(`http://localhost:8080/shop/delete/${shopId}`).subscribe({
      next: () => {
        console.log('Shop deleted successfully');
        this.fetchShops(); // Refresh the list
      },
      error: (err) => console.error('Error deleting shop:', err)
    });
  }
}
