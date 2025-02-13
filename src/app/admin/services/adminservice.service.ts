import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import BASE_URL from '../../helper/helper';

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




}



