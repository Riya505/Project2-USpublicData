import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-data',
  templateUrl: './public-data.component.html',
  styleUrls: ['./public-data.component.css']
})
export class PublicDataComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.publicData=data
      }
    )
  }

  publicData:any={}

  ngOnInit(): void {
  }

}
