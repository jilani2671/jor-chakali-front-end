import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-allpayments',
  templateUrl: './allpayments.component.html',
  styleUrl: './allpayments.component.css'
})
export class AllpaymentsComponent {

 ngOnInit(): void {
          initFlowbite();
        }
}

