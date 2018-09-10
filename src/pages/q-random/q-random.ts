import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { PreguntasProvider } from '../../providers/preguntas/preguntas';


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
  uniqueAnswer: Boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public preguntas: PreguntasProvider,
    private toast: ToastController,
    public loadingCtrl: LoadingController) {

    this.loadingComponent('Cargando Pregunta');
    this.LoadQuestion();

  }

  loadingComponent(text:string) {
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
        this.photo = 'http://localhost:8000/storage/' + this.datos.Imagen;
        this.secondFormula = this.datos.Segundo_parrafo;
        this.uniqueAnswer = this.datos.Es_unica;
        this.firstAnswer = this.datos.Primer_ru;
        this.secondAnswer = this.datos.Segunda_ru;
        this.tirthAnswer = this.datos.Tercera_ru;
        this.fourthAnswer = this.datos.Cuarta_ru;
        this.correctAnswer = this.datos.Respuesta;
        this.completelyLoaded = true;

      },
      (error) => { alert(error.message); }
    )
  }

  ionViewDidLoad() {

  }

  skip(){
    this.completelyLoaded = false;
    this.loadingComponent('Cargando nueva pregunta.');
    setTimeout("",1000);
    this.LoadQuestion();
  }


  functionAnswered() {
    if (this.uniqueAnswer) {
      this.verifyUniqueAnswer();
    } else {
      this.verifyNumberAnswer();
    }

  }

  verifyNumberAnswer() {
    alert(this.numberAnswer.toString());
  }

  verifyUniqueAnswer() {

    let answer = this.respuesta.toString();


    if (answer == this.correctAnswer) {

      let toast = this.toast.create({
        message: "Respuesta correcta",
        duration: 1000,
        position: 'middle'
      });

      toast.present();

    } else {

      let toast = this.toast.create({
        message: "Respuesta incorrecta",
        duration: 1000,
        position: 'middle'
      });

      toast.present();
    }
  }

}
