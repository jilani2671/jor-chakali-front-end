import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './auth/components/login/login.component';
import { NavbarComponent } from './admin/components/navbar/navbar.component';
import { HomeComponent } from './admin/components/home/home.component';
import { BottomnavComponent } from './admin/components/bottomnav/bottomnav.component';
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
import { HttpClientModule } from '@angular/common/http';
import { AdminserviceService } from './admin/services/adminservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateproductComponent } from './admin/components/updateproduct/updateproduct.component';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    NavbarComponent,
    HomeComponent,
    BottomnavComponent,
    SelectAreasComponent,
    ClientsComponent,
    ProductsComponent,
    OrdersComponent,
    AllordersComponent,
    PaymentsComponent,
    AllpaymentsComponent,
    LoadingOrderComponent,
    AllproductsComponent,
    InvoiceComponent,
    UpdateproductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, // Add this
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
