import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    setTimeout(() =>
      {this.slides.slideTo(1, 2000);}
      , 10000
    );
    setTimeout(() =>
      {this.slides.slideTo(2, 2000);}
      , 20000
    );
       
  }

  ionViewDidLoad() {
    
  }


  botonIniciar() {
    this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
  }
}
