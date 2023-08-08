import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule
  ],
  declarations: [Tab3Page]
})

export class Tab3PageModule {

  
//   constructor(private http: HttpClient) {
//     // this.readAPI('http://127.0.0.1:8000/api/words')
//     //   .subscribe((data: any) => {
//     //   console.log(data);
//     // });

//     this.GameApiUrl = 'http://127.0.0.1:8000/api/words';
//     this.readAPI(this.GameApiUrl)
//     .subscribe((data: any) => {
//     console.log(data);
//     console.log(this.GameData);
//     // this.GameData.mot1 = data['Title'];
//     // this.GameData.mot2 = data['Plot'];
//     // this.GameData.states = data['Poster'];
    
// });
//   }
  
    
//   GameApiUrl = '';
//   GameData = {
//     mot1: '',
//     mot2: '',
//     states: ''
//   };
//   readAPI(URL: string) {
//     return this.http.get(URL);
//   }
  
}


