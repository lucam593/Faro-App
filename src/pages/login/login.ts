import { Component, forwardRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { StudentRegistrationPage } from '../student-registration/student-registration';
import { Storage } from '@ionic/storage';



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


  constructor(
    private toast: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public loadingCtrl: LoadingController, ) {

    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Espere por favor.',
      duration: 500
    });

    loading.present();

    this.storage.get('isLogin').then((val) => {
      if (val == true) {
        this.loadHomePage();
      }
    }).catch((error: any) => {

    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewCanEnter() {

  }

  facebookLogin() {

    this.navCtrl.push(StudentRegistrationPage);


  }


  guestLogin() {
    let toast = this.toast.create({
      message: 'Usando la aplicacion como inivitado ',
      duration: 1000,
      position: 'bottom'
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
