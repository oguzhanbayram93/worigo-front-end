import { Injectable } from '@angular/core';
import { LocalPaths } from '../shared/local-paths';
import { HttpClient } from '@angular/common/http';
import { Hotels } from '../models/Hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  public mylocalPaths:LocalPaths = new LocalPaths();

  constructor(private http : HttpClient,) { }
  async getHotelsList(){
    try {
       return await this.http.get<Hotels[]>(this.mylocalPaths.apiPath + "Hotel/GetAll").toPromise();
     } catch (err) {
      //  return window.location.href = 'serverError';
     return console.log(err);
     }

  }

  async getHotelbyHotelId(id:string){
    try {
       return await this.http.get<Hotels[]>(this.mylocalPaths.apiPath + "Hotel/GetById/id"+id.toString()).toPromise();
     } catch (err) {
       return window.location.href = 'serverError';
     }

  }

  async AddNewHotel(newhotel:Hotels,imageUrl:string){
    try {
      return this.http.post<Hotels>(this.mylocalPaths.apiPath + "Hotel/Add", {
        hotelName:newhotel.hotelName,
        imageUrl:imageUrl,
        adress:newhotel.adress,
        phoneNumber:newhotel.phoneNumber,
        email:newhotel.email,
        floorNumber:newhotel.floorNumber,
        numberOfStar:newhotel.numberOfStar,
        roomNumber:newhotel.roomNumber,
        numberOfEmployees:newhotel.numberOfEmployees,
      }).toPromise();
     } catch (err) {
       return window.location.href = 'serverError';
     }

  }

  async AddNewHotelwithoutPhoto(newhotel:Hotels){
    try {
      return this.http.post<Hotels>(this.mylocalPaths.apiPath + "Hotel/Add", {
        hotelName:newhotel.hotelName,
        imageUrl:'',
        adress:newhotel.adress,
        phoneNumber:newhotel.phoneNumber,
        email:newhotel.email,
        floorNumber:newhotel.floorNumber,
        numberOfStar:newhotel.numberOfStar,
        roomNumber:newhotel.roomNumber,
        numberOfEmployees:newhotel.numberOfEmployees,
      }).toPromise();
     } catch (err) {
       return window.location.href = 'serverError';
     }

  }

  async UpdateHotel(updatehotel:Hotels,imageUrl:string){
    try {
      return this.http.post<Hotels>(this.mylocalPaths.apiPath + "Hotel/Update", {
        id: updatehotel.id,
        hotelName:updatehotel.hotelName,
        imageUrl:imageUrl,
        adress:updatehotel.adress,
        phoneNumber:updatehotel.phoneNumber,
        email:updatehotel.email,
        floorNumber:updatehotel.floorNumber,
        numberOfStar:updatehotel.numberOfStar,
        roomNumber:updatehotel.roomNumber,
        numberOfEmployees:updatehotel.numberOfEmployees,
      }).toPromise();
     } catch (err) {
       return window.location.href = 'serverError';
     }

  }


}
