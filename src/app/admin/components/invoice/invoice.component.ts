import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  invoiceData = {
    companyName: 'JOR CHAKLI PRODUCTION',
    address: 'Mahalaxmi sweets & Snacks Kadamwadi, Kolhapur-416008',
    phoneNumbers: ['7768877373', '8883411000'],
    billNo: '001',
    date: new Date().toLocaleDateString(),
    customer: {
      name: 'Customer Name',
      phone: 'Customer Phone'
    },
    items: [
      { no: 1, name: 'Special Jor Chakli', qty: '36pcs', rate: 36, amount: 36 },
      { no: 2, name: 'Shev Chakli', qty: '72pcs', rate: 36, amount: 36 },
      { no: 3, name: 'Ring Chakli', qty: '2kg', rate: 400, amount: 400 }
    ],
    total: 472
  };
}
