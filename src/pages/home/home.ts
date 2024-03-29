import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { SliderPage } from '../slider/slider';


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


  constructor( private toast: ToastController,public navCtrl: NavController,private storage: Storage, private http: Http, public navParams: NavParams) {
    this.firstFormula="Considere las siguientes figuras que corresponden a las partes de un cono despues de hacerce un corte paralelo a la base: `sqrt(x^2)`";
    this.secondFormula = "De acuerdo con los datos de las figuras anteriores, ¿Cuál es la medida en centimetros de \"h\"?"
    this.photo = "../assets/imgs/questionImg.jpg"
    this.firstAnswer = "`x^2+(y-4)^2 = 9`";
    this.secondAnswer = "`(x-4)^2+y^2 = 9`";
    this.tirthAnswer = "`(x-3)^2+y^2 = 16`"
    this.fourthAnswer = "`x^2+(y-3)^2 = 16`";
    this.correctAnswer = "3";
    this.uniqueAnswer = true;
    this.startVariables();
  }


  startVariables(){
   this.storage.get('firstTime').then((val)=>{
    if(val==true){
      this.storage.set('ARCorrect',0);
      this.storage.set('ARIncorrect',0);
      this.storage.set('EYPCorrect',0);
      this.storage.set('EYPIncorrect',0);
      this.storage.set('GeoCorrect',0);
      this.storage.set('GeoIncorrect',0);
      this.storage.set('AlgCorrect',0);
      this.storage.set('AlgIncorrect',0);
      this.storage.set('SimCorrect',0);
      this.storage.set('SimIncorrect',0);
      this.storage.set('AnnICorrect',0);
      this.storage.set('AnnIInCorrect',0);
      this.storage.set('AnnIICorrect',0);
      this.storage.set('AnnIIInCorrect',0);
      this.storage.set('AnnIIICorrect',0);
      this.storage.set('AnnIIIInCorrect',0);
      this.storage.set('firstTime',false);
      this.storage.set('SimulationCorrect',false);
      this.storage.set('SimulationIncorrect',false);
      this.navCtrl.setRoot(SliderPage, {}, { animate: true, direction: 'forward' });
      //create the method to show the tutorial like a slider
    }else{
    }
   });
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
