import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  tcuSite() {
    this.iab.create('http://http://so.ucr.ac.cr/laboratorio-de-matematicas');
  }

  tcuSite2() {
    this.iab.create('http://so.ucr.ac.cr/trabajo-comunal-universitario');
  }

  so() {
    this.iab.create('http://so.ucr.ac.cr/');
  }


}
