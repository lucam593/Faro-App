import { Component, forwardRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  data = null;


  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  facebookLogin() {

   

    let toast = this.toast.create({
      message: 'Ingresando como estudiante',
      duration: 1000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();


  }


  guestLogin() {
    let toast = this.toast.create({
      message: 'Usando la aplicacion como inivitado ',
      duration: 1000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
    this.loadHomePage();
  }

  loadHomePage() {
    this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
  }



}
