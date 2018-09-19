import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Alert } from 'ionic-angular';
import { PreguntasProvider } from '../../providers/preguntas/preguntas';
import { Storage } from '@ionic/storage';

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
  year: Number;
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
    this.topic = 2017;
    this.title = "Preguntas de 2017";
    this.displayButtons = false;
    this.LoadQuestion();
    this.loadingComponent('Cargando Pregunta');
    setTimeout(() => {
      this.completelyLoaded = true;
    }, 1000);
  }

  loadPastII() {
    this.topic = 2016;
    this.title = "Preguntas de 2016";
    this.displayButtons = false;
    this.LoadQuestion();
    this.loadingComponent('Cargando Pregunta');
    setTimeout(() => {
      this.completelyLoaded = true;
    }, 1000);
  }

  loadPastIII() {
    this.topic = 2015;
    this.title = "Preguntas de 2015";
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
          alert("Examen finalizado");
        }


      },
      (error) => { alert(error.message); }
    )
  }

  ionViewDidLoad() {

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
    alert(this.numberAnswer.toString());

    let answer = this.respuesta.toString();

    if (answer == this.numberAnswer.toString()) {
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

    } else if (this.topic == 1) {

      if (this.isCorrect) {
        this.storage.get('ARCorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('ARCorrect', tempCount);
        });
      } else {
        this.storage.get('ARIncorrect').then((val) => {
          tempCount = val + 1;
          this.storage.set('ARIncorrect', tempCount);
        });
      }

    } else if (this.topic == 1) {

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

    let answer = this.respuesta.toString();

    if (answer == this.correctAnswer) {
      this.correct();
    } else {
      this.incorrect();
    }

  }

}
