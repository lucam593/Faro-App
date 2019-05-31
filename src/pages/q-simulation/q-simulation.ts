import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Alert } from 'ionic-angular';
import { PreguntasProvider } from '../../providers/preguntas/preguntas';
import { Storage } from '@ionic/storage';
import { ConectionErrorPage } from '../conection-error/conection-error'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the QSimulationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q-simulation',
  templateUrl: 'q-simulation.html',
})
export class QSimulationPage {

  datos: any;
  myForm: FormGroup;

  displayButtons: Boolean = false;
  enableButton: Boolean = false;
  completelyLoaded: Boolean = false;
  firstFormula: String = "";
  respuesta: String = "";
  numberAnswer: Number;
  secondFormula: String = "";
  photo: String = "";
  firstAnswer: String = "";
  secondAnswer: String = "";
  tirthAnswer: String = "";
  fourthAnswer: String = "";
  correctAnswer: String = "";
  uniqueAnswer: Boolean = true;
  isCorrect: Boolean;
  isAnswered: Boolean;
  index: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public preguntas: PreguntasProvider,
    private toast: ToastController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    public formBuilder: FormBuilder) {

    this.myForm = this.createMyForm();

    
    this.index = 0;
    this.displayButtons = true;

    this.preguntas.simulacro(1).subscribe(
      (data) => {

        this.datos = data;
        this.storage.remove('simulation');
        this.storage.set('simulation', this.datos);
        this.storage.set('SimulationCorrect', 0);
        this.storage.set('SimulationIncorrect', 0);

      },
      (error) => {
        this.navCtrl.setRoot(ConectionErrorPage, {}, { animate: true, direction: 'forward' });
      });    


      setTimeout(() => {
        this.enableButton = true;
      }, 1000);
      
  }

  private LoadJSON(){
    this.index = 0;
    this.displayButtons = true;

    this.preguntas.simulacro(1).subscribe(
      (data) => {

        this.datos = data;
        this.storage.remove('simulation');
        this.storage.set('simulation', this.datos);
        this.storage.set('SimulationCorrect', 0);
        this.storage.set('SimulationIncorrect', 0);

      },
      (error) => {
        this.navCtrl.setRoot(ConectionErrorPage, {}, { animate: true, direction: 'forward' });
      });    

      setTimeout(() => {
        this.enableButton = true;
      }, 1000);
  }

  private createMyForm(){
    return this.formBuilder.group({
      uniqueAnswerTest: [''],
      numericAnswer: ['']
    });
  }

  comeBack() {
    this.displayButtons = true;
    this.completelyLoaded = false;
    this.index = 0;
    this.LoadJSON();
  }

  StartQuestions() {
    this.displayButtons = false;
    this.enableButton = false;
    this.LoadQuestion();
    this.loadingComponent('Cargando Pregunta');
    setTimeout(() => {
      this.completelyLoaded = true;
    }, 1000);
  }

  loadingComponent(text: string) {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: text,
      duration: 1000
    });

    loading.present();
  }

  LoadQuestion() {
    //this.storage.get('simulation').then((val) => {       
      //this.datos = val;

      //if (this.datos.length > this.index) {

        this.firstFormula = this.datos[this.index].Primer_parrafo;
        this.photo = 'https://mate-bachi.000webhostapp.com/storage/' + this.datos[this.index].Imagen;
        this.secondFormula = this.datos[this.index].Segundo_parrafo;
        this.uniqueAnswer = (this.datos[this.index].Es_unica == true);
        this.firstAnswer = this.datos[this.index].Primer_ru;
        this.secondAnswer = this.datos[this.index].Segunda_ru;
        this.tirthAnswer = this.datos[this.index].Tercera_ru;
        this.fourthAnswer = this.datos[this.index].Cuarta_ru;
        this.correctAnswer = this.datos[this.index].Respuesta;
        
      //} 
    //});





  }

  skip() {
    this.completelyLoaded = false;
    this.LoadQuestion();
    this.loadingComponent('Cargando pregunta ' + (this.index+1) + ' de ' + (this.datos.length) + '.' );
    setTimeout(() => {
      this.completelyLoaded = true;
    }, 1000);

  }

  functionAnswered() {
    if (this.uniqueAnswer){
      
      if(this.respuesta + '' == 'null'){

        this.isAnswered = false;
      } else{
        this.isAnswered = true;
      }     
    }else if( !this.uniqueAnswer){
      if(this.numberAnswer == null ){
        this.isAnswered = false;
      } else{
        this.isAnswered = true;
      }     
    }

    this.index = this.index + 1;

    if (this.uniqueAnswer) {
      this.verifyUniqueAnswer();
    } else {
      this.verifyNumberAnswer();
    }

    this.DBWrite();

    this.myForm.controls.uniqueAnswerTest.reset();
    this.myForm.controls.numericAnswer.reset();

    if(this.index < this.datos.length){
      setTimeout(() => {
        this.skip();
      }, 1000);

    }else{
      setTimeout(() => {
      this.loadingComponent('Calculando resultados');
      }, 1000);

      setTimeout(() => {
        this.comeBack();
        this.index = 0;
        this.completelyLoaded = false;
      }, 1000);
    }
    

  }

  verifyNumberAnswer() {
    let answer = this.correctAnswer + "";

    if (answer == this.numberAnswer + ""  && this.isAnswered) {
      this.correct();
    } else {
      this.incorrect();
    }
  }

  DBWrite() {

    let tempCount = 0;
    if (this.isCorrect) {
      this.storage.get('SimulationCorrect').then((val) => {
        tempCount = val + 1;
        this.storage.set('SimulationCorrect', tempCount);
      });
    } else {
      this.storage.get('SimulationIncorrect').then((val) => {
        tempCount = val + 1;
        this.storage.set('SimulationIncorrect', tempCount);
      });
    }

  }

  correct() {
    let toast = this.toast.create({
      message: "Respuesta correcta!!",
      duration: 1000,
      position: 'middle'
    });

    toast.present();

    this.isCorrect = true;
  }

  incorrect() {
    let toast = this.toast.create({
      message: " Respuesta incorrecta!!",
      duration: 1000,
      position: 'middle'
    });

    toast.present();
    this.isCorrect = false;
  }

  verifyUniqueAnswer() {

    if(this.isAnswered){
      let answer = this.respuesta.toString();

      if (answer == this.correctAnswer  ) {
        this.correct();
      } else {
        this.incorrect();
      }
    }else{
      this.incorrect();
    }

  }

}
