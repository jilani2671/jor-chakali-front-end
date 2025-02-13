import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './admin/components/home/home.component';
import { SelectAreasComponent } from './admin/components/select-areas/select-areas.component';
import { ClientsComponent } from './admin/components/clients/clients.component';
import { ProductsComponent } from './admin/components/products/products.component';
import { OrdersComponent } from './admin/components/orders/orders.component';
import { AllordersComponent } from './admin/components/orders/allorders/allorders.component';
import { PaymentsComponent } from './admin/components/payments/payments.component';
import { AllpaymentsComponent } from './admin/components/payments/allpayments/allpayments.component';
import { LoadingOrderComponent } from './admin/components/loading-order/loading-order.component';
import { AllproductsComponent } from './admin/components/allproducts/allproducts.component';
import { InvoiceComponent } from './admin/components/invoice/invoice.component';

const routes: Routes = [
  // Default route - Redirect to LoginComponent
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },

  // Home route (Fix for http://localhost:4200/home)
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'areas',
    component: SelectAreasComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'allorders',
    component: AllordersComponent,
  },
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'allpayments',
    component: AllpaymentsComponent,
  },
  {
    path: 'loading-order',
    component: LoadingOrderComponent,
  },

  {
    path: 'allproducts',
    component: AllproductsComponent
    ,
  },

  {
    path: 'invoice',
    component: InvoiceComponent
    ,
  },

  { path: 'clients/:locationId', component: ClientsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
  // // Admin route (Redirecting correctly)
  // {
  //   path: 'admin',
  //   redirectTo: 'admin/admin-home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
