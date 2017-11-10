import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';;
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { StructController } from './structcontroller';

@Component({
  selector: 'structpage',
  templateUrl: 'structpage.html'
})  
export class StructPage {

  CENTRALIZR_URL = "https://localhost:3443";
  struct;
  data;

  constructor(private navCtrl: NavController, private http: HttpClient, private navParams: NavParams) {
    this.struct = this.navParams.get("struct");
    this.data = this.navParams.get("data");
  }

  sendResult(json){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')

    let result = '{ "id":"'+this.struct._id+'", "results":'+json+'}';
    this.http.post(this.CENTRALIZR_URL+"/insertregistry", result, {headers: headers}).subscribe( (data:any) => {
      console.log("Response from the server: ", data);
    })
  }
}