import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  public Labels: string[] = ['Fallos', 'Aciertos'];
  public ARData: number[] = [0,0];
  public ALGData: number[] = [1, 1];
  public GEOData: number[] = [1, 1];
  public EYPData: number[] = [1, 1];
  public OTIData: number[] = [1, 1];
  public OTIIData: number[] = [1, 1];
  public OTIIIData: number[] = [1, 1];
  public SIMData: number[] = [1, 1];
  public Colours: Array<any> = [{ backgroundColor: ['#D05938', '#3863D0'] }];
  public ARType: string = 'doughnut';
  //-----------------------------------
  public isEYP: Boolean = false;
  public isGEO: Boolean = false;
  public isALG: Boolean = false;
  public isAR: Boolean = false;
  public isOT: Boolean = false;
  public isSIM: Boolean = false;
  //------------------------------------

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public renderer: Renderer,
    private storage: Storage) {
    
      let correct = 0;
      let incorrect = 0;

    this.storage.get('GeoCorrect').then((val) => {
      correct = val;
      this.GEOData[1] = correct;
    });

    this.storage.get('GeoIncorrect').then((val) => {
      incorrect = val;
      this.GEOData[0] = incorrect;
    });

    this.storage.get('EYPCorrect').then((val) => {
      correct = val;
      this.EYPData[1] = correct;
    });

    this.storage.get('EYPIncorrect').then((val) => {
      incorrect = val;
      this.EYPData[0] = incorrect;
    });

    this.storage.get('AlgCorrect').then((val) => {
      correct = val;
      this.ALGData[1] = correct;
    });

    this.storage.get('AlgIncorrect').then((val) => {
      incorrect = val;
      this.ALGData[0] = incorrect;
    });

    this.storage.get('ARCorrect').then((val) => {
      correct = val;
      this.ARData[1] = correct;
      
    });

    this.storage.get('ARIncorrect').then((val) => {
      incorrect = val;
      this.ARData[0] = incorrect;
    });

    this.storage.get('AnnICorrect').then((val) => {
      correct = val;
      this.OTIData[1] = correct;
    });

    this.storage.get('AnnIInCorrect').then((val) => {
      incorrect = val;
      this.OTIData[0] = incorrect;
    });

    this.storage.get('AnnIICorrect').then((val) => {
      correct = val;
      this.OTIIData[1] = correct;
    });

    this.storage.get('AnnIIInCorrect').then((val) => {
      incorrect = val;
      this.OTIIData[0] = incorrect;
    });

    this.storage.get('AnnIIICorrect').then((val) => {
      correct = val;
      this.OTIIIData[1] = correct;
    });

    this.storage.get('AnnIIIInCorrect').then((val) => {
      incorrect = val;
      this.OTIIIData[0] = incorrect;
    });

    this.storage.get('SimulationCorrect').then((val) => {
      correct = val;
      this.SIMData[1] = correct;
    });

    this.storage.get('SimulationIncorrect').then((val) => {
      incorrect = val;
      this.SIMData[0] = incorrect;
    });

    
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
