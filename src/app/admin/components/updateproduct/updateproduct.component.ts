import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.css'
})
export class UpdateproductComponent {



   ngOnInit(): void {
      initFlowbite();
    }
}
