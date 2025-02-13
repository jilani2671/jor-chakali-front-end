import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-loading-order',
  templateUrl: './loading-order.component.html',
  styleUrl: './loading-order.component.css'
})
export class LoadingOrderComponent {

  
      ngOnInit(): void {
        initFlowbite();
      }

}
