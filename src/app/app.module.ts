import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// imports
import { HttpClientModule } from '@angular/common/http';

// pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StructList } from '../pages/structlist/structlist'
import { StructPage } from '../pages/structpage/structpage';
import { StructController } from '../pages/structpage/structcontroller';
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StructList,
    StructPage,
    StructController
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StructList,
    StructPage,
    StructController
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
