import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import json file in ts
// import data from "../json/apps";
// or
import * as data from "../../json/apps";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  appData :any = {};

  constructor(public http : HttpClient , public router: Router ){
    this.getAppData();
  }

  edit(){
    alert("still not implemented...");
  }

  getAppData(){
    this.http.get("assets/json/apps.json").subscribe( res => {this.appData = res; console.log(".this.appData",this.appData);} ); 
  }

  goToApp(appName:string){
    this.router.navigateByUrl(appName)
  }
}
