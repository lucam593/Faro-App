import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Alert } from 'ionic-angular';
import { PreguntasProvider } from '../../providers/preguntas/preguntas';
import { Storage } from '@ionic/storage';
import {ConectionErrorPage} from '../conection-error/conection-error';

/**
 * Generated class for the QExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q-exams',
  templateUrl: 'q-exams.html',
})
export class QExamsPage {

  datos: any;

  title: String = "Examenes anteriores";
  topic: number = 0;
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
  year: number;
  index: number;
  firstLoad: Boolean;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public preguntas: PreguntasProvider,
    private toast: ToastController,
    public loadingCtrl: LoadingController,
    private storage: Storage) {

    this.displayButtons = true;
    this.title = "Preguntas por temas";
    this.year = parseInt(new Date().toISOString().substring(0, 4));
    this.index = 0;
    this.firstLoad = true;



  }

  comeBack() {
    this.title = "Preguntas por temas";
    this.topic = 0;
    this.displayButtons = true;
    this.completelyLoaded = false;
  }

  loadPastI() {
    this.topic = this.year-1;
    this.title = "Preguntas de "+this.topic;
    this.displayButtons = false;
    this.storage.set('AnnICorrect', 0);
    this.storage.set('AnnIInCorrect', 0);
    this.LoadQuestion();
    this.loadingComponent('Cargando Pregunta');
    setTimeout(() => {
      this.completelyLoaded = true;
    }, 1000);
  }

  loadPastII() {
    this.topic = this.year-2;
    this.title = "Preguntas de "+this.topic;
    this.displayButtons = false;
    this.storage.set('AnnIICorrect', 0);
    this.storage.set('AnnIIInCorrect', 0);
    this.LoadQuestion();
    this.loadingComponent('Cargando Pregunta');
    setTimeout(() => {
      this.completelyLoaded = true;
    }, 1000);
  }

  loadPastIII() {
    this.topic = this.year-3;
    this.title = "Preguntas de "+this.topic;
    this.displayButtons = false;
    this.storage.set('AnnIIICorrect', 0);
    this.storage.set('AnnIIIInCorrect', 0);
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
    this.preguntas.anno(this.topic).subscribe(
      (data) => {


        this.datos = data;
        if (this.datos.length >= this.index) {

          this.firstFormula = this.datos[this.index].Primer_parrafo;
          this.photo = 'https://mate-bachi.000webhostapp.com/storage/' + this.datos[this.index].Imagen;
          this.secondFormula = this.datos[this.index].Segundo_parrafo;
          this.uniqueAnswer = (this.datos[this.index].Es_unica == true);
          this.firstAnswer = this.datos[this.index].Primer_ru;
          this.secondAnswer = this.datos[this.index].Segunda_ru;
          this.tirthAnswer = this.datos[this.index].Tercera_ru;
          this.fourthAnswer = this.datos[this.index].Cuarta_ru;
          this.correctAnswer = this.datos[this.index].Respuesta;

        } else {
          this.loadingComponent('Calculando resultados');
          setTimeout(() => {
            this.comeBack();
          }, 1000);
        }


      },
      (error) => { 
        this.navCtrl.setRoot(ConectionErrorPage, {}, { animate: true, direction: 'forward' });
      }
    )
  }

  skip() {
    this.completelyLoaded = false;
    this.LoadQuestion();
    this.loadingComponent('Cargando nueva pregunta.');
    setTimeout(() => {
      this.completelyLoaded = true;
    }, 1000);

  }

  functionAnswered() {
    this.index = this.index + 1;
    if (this.uniqueAnswer) {
      this.verifyUniqueAnswer();
    } else {
      this.verifyNumberAnswer();
    }
    this.DBWriteTopics();
    setTimeout(() => {
      this.skip();
    }, 1000);

  }

  verifyNumberAnswer() {
    let answer = this.respuesta.toString();

    if (answer == this.numberAnswer.toString()) {
      this.correct();
    } else {
      this.incorrect();
    }
  }

  DBWriteTopics() {
    let tempCount = 0;
    if (this.topic == (this.year - 1)) {

      if (this.isCorrect) {
        this.storage.get('AnnICorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('AnnICorrect', tempCount);
        });
      } else {
        this.storage.get('AnnIInCorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('AnnIInCorrect', tempCount);
        });
      }

    } else if (this.topic == (this.year - 2)) {

      if (this.isCorrect) {
        this.storage.get('AnnIICorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('AnnIICorrect', tempCount);
        });
      } else {
        this.storage.get('AnnIIInCorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('AnnIIInCorrect', tempCount);
        });
      }

    } else if (this.topic == (this.year - 3)) {

      if (this.isCorrect) {
        this.storage.get('AnnIIICorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('AnnIIICorrect', tempCount);
        });
      } else {
        this.storage.get('AnnIIIInCorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('AnnIIIInCorrect', tempCount);
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

    let answer = this.respuesta.toString();

    if (answer == this.correctAnswer) {
      this.correct();
    } else {
      this.incorrect();
    }

  }

}
