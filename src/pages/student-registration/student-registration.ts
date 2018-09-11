import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validator, AbstractControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the StudentRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-registration',
  templateUrl: 'student-registration.html',
})
export class StudentRegistrationPage {

  private todo: FormGroup;
  name:AbstractControl;
  secondName: AbstractControl;
  mail: AbstractControl;

   
  constructor(private toast: ToastController,public navCtrl: NavController, public navParams: NavParams, public formbuilder: FormBuilder,private storage: Storage) {
  
    this.todo = formbuilder.group({
      name: ['',Validators.compose( [Validators.required, Validators.minLength(3)])],
      secondName: ['',Validators.compose( [Validators.required, Validators.minLength(3)])],
      mail: ['', Validators.compose( [Validators.required, Validators.pattern('^[a-zA-z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]
    });

    this.name = this.todo.controls['name'];
    this.secondName = this.todo.controls['secondName'];
    this.mail = this.todo.controls['mail'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentRegistrationPage');
  }

  register(){
    this.storage.set('mail', this.todo.controls['mail'].value);
    this.storage.set('name', this.todo.controls['name'].value);
    this.storage.set('secondName', this.todo.controls['secondName'].value);
    this.storage.set('isLogin', true);
    this.storage.set('firstTime', true);

    let toast = this.toast.create({
      message: 'Registro existoso ',
      duration: 1000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  
    this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
  }


  }


