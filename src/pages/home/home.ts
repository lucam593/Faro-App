import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formulae : String ;

  constructor(public navCtrl: NavController) {
    this.formulae="`ax^2 + bx + c = 0`";
  }

  
}
