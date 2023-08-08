import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-commencer',
  templateUrl: './commencer.page.html',
  styleUrls: ['./commencer.page.scss'],
})
export class CommencerPage implements OnInit {

  rangeVal!: number;
  rangeVal1!: number;

  constructor(public platform:Platform) { 
    this.platform.ready().then(()=>{
      this.rangeVal = 0;
      this.rangeVal1 = this.rangeVal + 1;
    })
  }

  ngOnInit() {
  }

  CambioRango( event: any ) {
    console.log(event);
  }
}
