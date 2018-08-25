import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QSimulationPage } from './q-simulation';

@NgModule({
  declarations: [
    QSimulationPage,
  ],
  imports: [
    IonicPageModule.forChild(QSimulationPage),
  ],
})
export class QSimulationPageModule {}
