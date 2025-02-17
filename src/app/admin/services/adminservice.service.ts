import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import BASE_URL from '../../helper/helper';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  public addLocation(location: { locationName: string }): Observable<any> {
    return this.http.post(`${BASE_URL}/location/add`, location);
  }


  public getLocations(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/location/get`);
  }
  public deleteLocation(id: number): Observable<any> {
    console.log(`Deleting ID => ${id}`);
    return this.http.delete<any>(`${BASE_URL}/location/delete/${id}`);
  }

  updateLocation(id: number, updatedLocation: any): Observable<any> {
    return this.http.put(`${BASE_URL}/location/update/${id}`, updatedLocation, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  getShopById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/location/get/${id}`);
  }


  public addShop(shopData: { shopName: string; contact: string; location: { locationId: number } }): Observable<any> {
    return this.http.post(`${BASE_URL}/shop/add`, shopData);
  }
  
   
   // Delete Shop by ID
   public deleteShop(shopId: number): Observable<any> {
    return this.http.delete<any>(`${BASE_URL}/shop/delete/${shopId}`);
  }

  public addProduct(productData: FormData): Observable<any> {
    return this.http.post(`${BASE_URL}/product/add`, productData);
  }
  
  public getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/product/all`);
  }
  


deleteProduct(productId: string): Observable<any> {
  console.log("Deleting product ID =>", productId);
  return this.http.delete(`${BASE_URL}/product/delete/${productId}`);
}

// updateProduct(id: number, updatedProduct: any): Observable<any> {
//   return this.http.put(`${BASE_URL}/product/update/${id}`, updatedProduct, {
//     headers: { 'Content-Type': 'application/json' }
//   });
// }


// updateProduct(productId: number, formData: FormData) {
//   console.log("updating product ID =>", productId);
//   return this.http.put(`${BASE_URL}/update/${productId}`, formData);
// }

updateProduct(productId: number, formData: FormData) {
  console.log("updating product ID =>", productId);
  return this.http.put(`${BASE_URL}/product/update/${productId}`, formData);
}




}


