import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formulae : String ;

  constructor(public navCtrl: NavController) {
    this.formulae="`sin(at)= sqrt(sin ((x^2)^4))`";

    
  }

  
}
