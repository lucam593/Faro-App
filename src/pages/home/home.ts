import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  firstFormula : String ;
  respuesta: String;
  numberAnswer: Number;
  secondFormula : String ;
  photo: String;
  firstAnswer: String;
  secondAnswer: String;
  tirthAnswer: String;
  fourthAnswer: String;
  correctAnswer: String;
  uniqueAnswer: Boolean;


  constructor( private toast: ToastController,public navCtrl: NavController) {
    this.firstFormula="Considere las siguientes figuras que corresponden a las partes de un cono despues de hacerce un corte paralelo a la base: `sqrt(x^2)`";
    this.secondFormula = "De acuerdo con los datos de las figuras anteriores, ¿Cuál es la medida en centimetros de \"h\"?"
    this.photo = "../assets/imgs/questionImg.jpg"
    this.firstAnswer = "20";
    this.secondAnswer = "16";
    this.tirthAnswer = "12"
    this.fourthAnswer = "10";
    this.correctAnswer = "3";
    this.uniqueAnswer = false;
  }


  functionAnswered(){
    if(this.uniqueAnswer){
      this.verifyUniqueAnswer();
    }else{
      this.verifyNumberAnswer();
    } 
    
  }

  verifyNumberAnswer(){
    alert(this.numberAnswer.toString());
  }

  verifyUniqueAnswer(){
          
    let answer = this.respuesta.toString();

    if(answer === this.correctAnswer){
      
      let toast = this.toast.create({
        message: "Respuesta correcta",
        duration: 1000,
        position: 'middle'
      });

      toast.present();

    }else{
      
      let toast = this.toast.create({
        message: "Respuesta incorrecta",
        duration: 1000,
        position: 'middle'
      });

      toast.present();
    }
  }
  
}
