import { Component } from '@angular/core';
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
  public doughnutChartLabels: string[] = ['Fallos', 'Aciertos'];
  public doughnutChartData: number[] = [11, 50];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoresPage');

  }

}
