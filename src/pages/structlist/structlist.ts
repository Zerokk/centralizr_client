import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';;
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { StructPage } from '../structpage/structpage';

@Component({
  selector: 'structlist',
  templateUrl: 'structlist.html'
})  
export class StructList {

  CENTRALIZR_URL = "https://localhost:3443"
  list;

  constructor(private navCtrl: NavController, private http: HttpClient, private navParams: NavParams, public loadCtrl:LoadingController) {
    this.list = this.navParams.get("list");
  }

  getStruct(struct){
    let params = new HttpParams()
        .append("key", struct.key)
        .append("origin", "ionic");

        let loading = this.loadCtrl.create({
          content: 'Fetching data...'
        });
        loading.present();
        
    this.http.get(this.CENTRALIZR_URL+"/getstruct", {params: params}).subscribe( (res:any) => {   // RESOLVER
        loading.dismiss();
        if(res.err){
            console.log("ERROR: ", res.err);
        }
        this.navCtrl.push(StructPage, {struct: res.struct, data: res.data})
    })
  }
}