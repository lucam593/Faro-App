import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Alert } from 'ionic-angular';
import { PreguntasProvider } from '../../providers/preguntas/preguntas';
import { Storage } from '@ionic/storage';
import { ConectionErrorPage } from '../conection-error/conection-error';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the QTopicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q-topics',
  templateUrl: 'q-topics.html',
})
export class QTopicsPage {

  datos: any;
  myForm: FormGroup;

  title: String = "Preguntas por temas";
  topic: Number = 0;
  displayButtons: Boolean = true;
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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public preguntas: PreguntasProvider,
    private toast: ToastController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    public formBuilder: FormBuilder) {

    this.myForm = this.createMyForm();

    this.displayButtons = true;
    this.title = "Preguntas por temas";


  }

  private createMyForm() {
    return this.formBuilder.group({
      uniqueAnswerTest: [''],
      numericAnswer: ['']
    });
  }

  comeBack() {
    this.title = "Preguntas por temas";
    this.topic = 0;
    this.displayButtons = true;
    this.completelyLoaded = false;
  }

  loadAlgebra() {
    this.topic = 2;
    this.title = "Preguntas de Algebra";
    this.displayButtons = false;
    this.LoadQuestion();
    this.loadingComponent('Cargando Pregunta');
    setTimeout(() => {
      this.completelyLoaded = true;
    }, 1000);
  }

  loadGeometry() {
    this.topic = 1;
    this.title = "Preguntas de Geometria";
    this.displayButtons = false;
    this.LoadQuestion();
    this.loadingComponent('Cargando Pregunta');
    setTimeout(() => {
      this.completelyLoaded = true;
    }, 1000);
  }

  loadStadistics() {
    this.topic = 3;
    this.title = "Preguntas de Estadistica";
    this.displayButtons = false;
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
    this.preguntas.temas(this.topic).subscribe(
      (data) => {

        this.datos = data;
        this.firstFormula = this.datos.Primer_parrafo;
        this.photo = 'https://mate-bachi.000webhostapp.com/storage/' + this.datos.Imagen;
        this.secondFormula = this.datos.Segundo_parrafo;
        this.uniqueAnswer = (this.datos.Es_unica == true);
        this.firstAnswer = this.datos.Primer_ru;
        this.secondAnswer = this.datos.Segunda_ru;
        this.tirthAnswer = this.datos.Tercera_ru;
        this.fourthAnswer = this.datos.Cuarta_ru;
        this.correctAnswer = this.datos.Respuesta;


      },
      (error) => {
        this.navCtrl.setRoot(ConectionErrorPage, {}, { animate: true, direction: 'forward' });
      }
    )
  }

  ionViewDidLoad() {

  }

  skip() {
    this.myForm = this.createMyForm();
    this.completelyLoaded = false;
    this.LoadQuestion();
    this.loadingComponent('Cargando nueva pregunta.');
    setTimeout(() => {
      this.completelyLoaded = true;
    }, 1000);

  }

  functionAnswered() {

    if (this.uniqueAnswer) {

      if (this.respuesta + '' == 'null') {

        this.isAnswered = false;
      } else {
        this.isAnswered = true;
      }
    } else if (!this.uniqueAnswer) {
      if (this.numberAnswer == null) {
        this.isAnswered = false;
      } else {
        this.isAnswered = true;
      }
    }


    if (this.uniqueAnswer) {
      this.verifyUniqueAnswer();
    } else {
      this.verifyNumberAnswer();
    }

    this.myForm.controls.uniqueAnswerTest.reset();
    this.myForm.controls.numericAnswer.reset();

    this.DBWriteTopics();
    setTimeout(() => {
      this.skip();
    }, 1000);

  }

  verifyNumberAnswer() {
    let answer = this.correctAnswer + "";

    if (answer == this.numberAnswer + "" && this.isAnswered) {
      this.correct();
    } else {
      this.incorrect();
    }
  }

  DBWriteTopics() {
    let tempCount = 0;
    if (this.topic == 1) {

      if (this.isCorrect) {
        this.storage.get('GeoCorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('GeoCorrect', tempCount);
        });
      } else {
        this.storage.get('GeoIncorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('GeoIncorrect', tempCount);
        });
      }

    } else if (this.topic == 2) {

      if (this.isCorrect) {
        this.storage.get('AlgCorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('AlgCorrect', tempCount);
        });
      } else {
        this.storage.get('AlgIncorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('AlgIncorrect', tempCount);
        });
      }

    } else if (this.topic == 3) {

      if (this.isCorrect) {
        this.storage.get('EYPCorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('EYPCorrect', tempCount);
        });
      } else {
        this.storage.get('EYPIncorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('EYPIncorrect', tempCount);
        });
      }

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

    if (this.isAnswered) {
      let answer = this.respuesta.toString();

      if (answer == this.correctAnswer) {
        this.correct();
      } else {
        this.incorrect();
      }
    } else {
      this.incorrect();
    }

  }

}
