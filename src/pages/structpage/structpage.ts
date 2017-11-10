import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';;
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { StructController } from './structcontroller';

@Component({
  selector: 'structpage',
  templateUrl: 'structpage.html'
})  
export class StructPage {

  CENTRALIZR_URL = "https://localhost:3443";
  struct;
  data;

  constructor(private navCtrl: NavController, private http: HttpClient, private navParams: NavParams, private toastCtrl:ToastController, private loadCtrl:LoadingController) {
    this.struct = this.navParams.get("struct");
    this.data = this.navParams.get("data");
    console.log("Data from this dataset: ",this.data);
  }

  sendResult(json){
    let loading = this.loadCtrl.create({
      content: 'Inserting...'
    });
    loading.present();
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    let result = '{ "id":"'+this.struct._id+'", "results":'+json+'}';
    this.http.post(this.CENTRALIZR_URL+"/insertregistry", result, {headers: headers}).subscribe( (data:any) => {
      if(data.status == "success"){
        this.toastify("Correctly inserted your registry", 1500);
      }else{
        this.toastify("Error inserting your registry", 2000);
      }
      loading.dismiss();
    })
  }

  toastify(message, duration){       
    this.toastCtrl.create({
           message: message,
           duration: duration
    }).present();
  }
}