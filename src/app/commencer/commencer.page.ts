import { Component, OnInit } from '@angular/core';
import { Platform, RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-commencer',
  templateUrl: './commencer.page.html',
  styleUrls: ['./commencer.page.scss'],
})
export class CommencerPage implements OnInit {

  rangeVal!: number;
  rangeVal1!: number;
  rangeVal2!: number;
  selectedValue!: number;
  moveEnd: any;
  reste!:number;


  constructor(public platform:Platform) { 

    
    for (let i = 0; i < this.moveEnd; i++) {
      
    }
    this.platform.ready().then(()=>{
      this.rangeVal = 13;
      if(this.rangeVal%2 == 0){
        this.rangeVal1=this.rangeVal/2;
      }else{
        this.rangeVal1=this.rangeVal/2 +0.5;
      }
      if(this.rangeVal1%2 == 0){
        this.rangeVal2=this.rangeVal1/2;
      }else{
        this.rangeVal2=this.rangeVal1/2 -0.5;
      }
    })
  }
  onIonKnobMoveEnd(ev: Event) {
    this.moveEnd = (ev as RangeCustomEvent).detail.value;

    if(this.moveEnd%2 == 0){
      this.rangeVal1=this.moveEnd/2;
    }else{
      this.rangeVal1=this.moveEnd/2 +0.5;
    }
    if(this.rangeVal1%2 == 0){
      this.rangeVal2=this.rangeVal1/2;
    }else{
      this.rangeVal2=this.rangeVal1/2 -0.5;
    }
    this.reste =this.moveEnd -this.rangeVal1 - this.rangeVal2;
  }
  onChangerange(data: any){
    if(this.rangeVal%2 == 0){
      this.rangeVal1=this.rangeVal/2;
    }else{
      this.rangeVal1=this.rangeVal/2 +0.5;
    }
    if(this.rangeVal1%2 == 0){
      this.rangeVal2=this.rangeVal1/2;
    }else{
      this.rangeVal2=this.rangeVal1/2 -0.5;
    }
  }
  ngOnInit() {
  }

  CambioRango( event: any ) {
    console.log(event);
  }
}
