import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Alert } from 'ionic-angular';
import { PreguntasProvider } from '../../providers/preguntas/preguntas';
import { Storage } from '@ionic/storage';

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
  index: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public preguntas: PreguntasProvider,
    private toast: ToastController,
    public loadingCtrl: LoadingController,
    private storage: Storage) {

    this.displayButtons = true;
    this.index = 0;
    this.preguntas.simulacro().subscribe(
      (data) => {

        this.datos = data;
        this.storage.set('simulation', this.datos);
        this.storage.set('SimulationCorrect', 0);
        this.storage.set('SimulationIncorrect', 0);

      },
      (error) => {
        alert(error.message);
      }
    )


  }

  comeBack() {
    this.displayButtons = true;
    this.completelyLoaded = false;
  }

  StartQuestions() {
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

    this.storage.get('simulation').then((val) => {
      this.datos = val;


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
    });





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
    this.DBWrite();
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

    let answer = this.respuesta.toString();

    if (answer == this.correctAnswer) {
      this.correct();
    } else {
      this.incorrect();
    }

  }

}
