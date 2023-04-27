import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// import json file in ts
// import data from "../json/apps";
// or
import * as data from "../../json/apps";
@Component({
  selector: 'app-appslist',
  templateUrl: './appslist.component.html',
  styleUrls: ['./appslist.component.scss']
})
export class AppslistComponent {
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
