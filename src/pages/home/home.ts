import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';;
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { StructList } from '../structlist/structlist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})  
export class HomePage {

  CENTRALIZR_URL = "https://localhost:3443"
  user;
  pw;

  constructor(private navCtrl: NavController, private http:HttpClient, private loadCtrl: LoadingController) {

  }

  send(){
    let loading = this.loadCtrl.create({
      content: 'Logging in...'
    });
    loading.present();

    const loginData = {user: this.user, pw: this.pw, origin: 'ionic'};
    this.http.post(this.CENTRALIZR_URL+"/login", loginData).subscribe( (data:any) => {
      if(data.key){
        const sessionKey = data.key;
        console.log("retrieved key: ",sessionKey)
        this.fetchStructList(sessionKey).then( list => {
           loading.dismiss();
           this.navCtrl.push(StructList, {list: list});
        }).catch( err => console.log("ERROR: ", err));
     }
    })
  }

  fetchStructList(key){
    return new Promise( (resolve, reject) => {

      let params = new HttpParams()
                  .append("sessionKey", key)
                  .append("origin", "ionic");
     
      this.http.get(this.CENTRALIZR_URL+"/getstructs", {params: params}).subscribe( res => {   // RESOLVER
        console.log("RECIBIDO: ", res)
          if(res[0]){
            resolve(res);
          }else{
            reject(res);
          }
        })

    });
  }
}
