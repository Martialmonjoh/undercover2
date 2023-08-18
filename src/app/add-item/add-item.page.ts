import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  title!:string;
  description!:string;
  constructor(public navCtrl:NavController,) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarouselWithLoginRegPage');
  }
  navToLogin(){
  }

slider = [{
    title:"Taking the hassel out of laundry. Simple",
    desc:"We collect, wash & deliver your items back to you",
    img:"assets/imgs/parker-burchfield-224850.jpg"
  },
  {
    title:"1). Book with the WashEz app",
    desc:"Select a convinent collection time",
    img:"../assets/imgs/hannah-morgan-39891.jpg"
  },
  {
    title:"2). Meet WashEz driver",
    desc:"collect from your home or office",
    img:"../assets/imgs/jason-briscoe-105340.jpg"
  },
    {
      title:"3). Get your clean laundry",
      desc:"get your stuff at sutible time that suit you",
      img:"../assets/imgs/nik-macmillan-153579.jpg"}
];

  ngOnInit() {
  }

  // saveItem(){
  //   let newItem ={
  //     title: this.title,
  //     description:"this.description",
  //   };

  //   this.view.dismiss(newItem);
  // }

  // close(){
  //   this.view.dismiss();
  // }

}
