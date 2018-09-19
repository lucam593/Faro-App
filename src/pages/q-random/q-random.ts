import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { PreguntasProvider } from '../../providers/preguntas/preguntas';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the QRandomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q-random',
  templateUrl: 'q-random.html',
})
export class QRandomPage {

  datos: any;

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public preguntas: PreguntasProvider,
    private toast: ToastController,
    public loadingCtrl: LoadingController,
    private storage: Storage) {

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
    this.preguntas.todoAleatorio().subscribe(
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
    if (this.uniqueAnswer) {
      this.verifyUniqueAnswer();
    } else {
      this.verifyNumberAnswer();
    }
    this.DBWriteAllRandom();
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

  DBWriteAllRandom(){
    let tempCount = 0;
    if(this.isCorrect){
      this.storage.get('ARCorrect').then((val)=>{
        tempCount = val + 1;
        this.storage.set('ARCorrect',tempCount);
      });
    }else{
      this.storage.get('ARIncorrect').then((val)=>{
        tempCount = val + 1;
        this.storage.set('ARIncorrect',tempCount);
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

    this.isCorrect =  true;
  }

  incorrect() {
    let toast = this.toast.create({
      message: " Respuesta incorrecta!!",
      duration: 1000,
      position: 'middle'
    });

    toast.present();
    this.isCorrect =  false;
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
