import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AddItemPage } from "../app/add-item/add-item.page";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite/ngx';


// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireStorageModule } from '@angular/fire/storage';


//import { IonicStorageModule } from "@ionic/storage";
export const firebaseConfig = {
  apiKey: "AIzaSyD2_ThivI0qSoggcBgtdKLu0VIqn_pRT14",
  authDomain: "undercover-eafb7.firebaseapp.com",
  projectId: "undercover-eafb7",
  storageBucket: "undercover-eafb7.appspot.com",
  messagingSenderId: "615067498194",
  appId: "1:615067498194:web:c7fb7d6109a0cb131f1f0b",
  measurementId: "G-FLG9CH43EC"
};

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    // IonicStorageModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    //  AngularFireDatabaseModule,
    //  AngularFireAuthModule,
    //  AngularFireStorageModule,
     
    HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
