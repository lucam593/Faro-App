import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formulae : String ;
  respuesta: String;

  constructor( private toast: ToastController,public navCtrl: NavController) {
    this.formulae="Unas palabras de prueba para el caso de formulas y texto: `sqrt(x^2)`";

    
  }


  functionAnswered(){
    

    let toast = this.toast.create({
      message: "Respuesta " + this.respuesta.toString() + "!!",
      duration: 1000,
      position: 'middle'
    });

    toast.present();
  }

  
}
