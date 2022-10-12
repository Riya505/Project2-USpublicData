import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewData=()=>{
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }
}
