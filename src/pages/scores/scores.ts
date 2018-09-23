import { Component,ViewChild,OnInit, Renderer, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scores',
  templateUrl: 'scores.html',
})

export class ScoresPage {

  public ARLabels: string[] = ['Fallos', 'Aciertos'];
  public ARData: number[] = [1, 1];
  public ARType: string = 'doughnut';
  public isEYP: Boolean = false;
  public isGEO: Boolean = false;
  public isALG: Boolean = false;
  public isAR: Boolean = false;
  public isOT: Boolean = false;
  public isSIM: Boolean = false;


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public renderer: Renderer) {
    
  }


  ionViewDidLoad() {
    

  }

  eventAR() {
    this.isAR = !this.isAR;

  }

  eventALG() {
    this.isALG = !this.isALG;

  }

  eventGEO() {
    this.isGEO = !this.isGEO;

  }

  eventEYP() {
    this.isEYP = !this.isEYP;

  }

  eventSIM() {
    this.isSIM = !this.isSIM;

  }

  eventOT() {
    this.isOT = !this.isOT;

  }
}
