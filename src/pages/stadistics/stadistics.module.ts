import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StadisticsPage } from './stadistics';

@NgModule({
  declarations: [
    StadisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(StadisticsPage),
  ],
})
export class StadisticsPageModule {}
