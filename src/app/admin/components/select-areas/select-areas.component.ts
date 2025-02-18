import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../../services/adminservice.service';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-select-areas',
  templateUrl: './select-areas.component.html',
  styleUrls: ['./select-areas.component.css']
})
export class SelectAreasComponent implements OnInit {
  locationForm!: FormGroup;
  locations: any[] = []; 
  isModalOpen = false; 
  router: any;


  constructor(private fb: FormBuilder, private adminService: AdminserviceService ,router: Router) {}

  ngOnInit(): void {
    initFlowbite();
    this.locationForm = this.fb.group({
      locationName: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.fetchLocations(); 
  }

  addLocation(): void {
    if (this.locationForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    const newLocation = this.locationForm.value;

    this.adminService.addLocation(newLocation).subscribe({
      next: (response) => {
        console.log('Location added successfully:', response);
        this.locationForm.reset();
        this.fetchLocations(); 
        this.closeModal();
      },
      error: (err) => {
        console.error('Error adding location:', err);
      }
    });
  }

  deleteLocation(id?: number): void {
    if (!id) {
        console.error('Invalid ID:', id);
        return;
    }
    console.log(`Deleting location with ID: ${id}`);
    this.adminService.deleteLocation(id).subscribe({
        next: () => {
            console.log('Location deleted successfully:', id);
            this.locations = this.locations.filter(loc => loc.locationId !== id); 
        },
        error: (err) => console.error('Error deleting location:', err)
    });
}


  fetchLocations(): void {
    this.adminService.getLocations().subscribe({
      next: (data) => {
        console.log('Fetched Locations:', data); 
        this.locations = data; 
      },
      error: (err) => {
        console.error('Error fetching locations:', err);
      }
    });
  }
  
  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  closeModalOnOutsideClick(event: Event): void {
    if ((event.target as HTMLElement).id === 'areaModal') {
      this.closeModal();
    }
  }



  isUpdateModalOpen = false;
updatingLocationId?: number; 


openUpdateModal(location: any): void {
  this.updatingLocationId = location.locationId; 
  this.isUpdateModalOpen = true;
  this.locationForm.patchValue({ locationName: location.locationName }); 
}

closeUpdateModal(): void {
  this.isUpdateModalOpen = false;
  this.updatingLocationId = undefined;
  this.locationForm.reset(); 
}
closeUpdateModalOnOutsideClick(event: Event): void {
  if ((event.target as HTMLElement).id === 'updateModal') {
      this.closeUpdateModal();
  }
}
updateLocation(): void {
  if (this.locationForm.invalid || !this.updatingLocationId) {
    console.error('Form is invalid or no location selected');
    return;
  }


  const updatedLocation = {
    locationName: this.locationForm.value.locationName
  };

  this.adminService.updateLocation(this.updatingLocationId, updatedLocation).subscribe({
    next: (response) => {
      console.log('Location updated successfully:', response);
      this.fetchLocations(); 
      this.closeUpdateModal(); 
    },
    error: (err) => {
      console.error('Error updating location:', err);
    }
  });
}



}
