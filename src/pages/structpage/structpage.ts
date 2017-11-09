import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';;
import { NavController, NavParams, LoadingController } from 'ionic-angular';

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

    console.log("struct: ", this.struct);
    console.log("data: ", this.data);
  }


}