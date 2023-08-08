import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, NavController } from "@ionic/angular";
import { NavParams } from '@ionic/angular';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';

export interface Item{
  id:number;
  title:string;
  value:string;
  modified:number;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {
  todos: Observable<any> | undefined;
  constructor(public navCtrl:NavController,public todoService: TodoService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
     }
    
  ngOnInit() {
  }  

}
