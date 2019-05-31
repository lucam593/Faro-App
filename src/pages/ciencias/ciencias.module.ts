import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CienciasPage } from './ciencias';

@NgModule({
  declarations: [
    CienciasPage,
  ],
  imports: [
    IonicPageModule.forChild(CienciasPage),
  ],
})
export class CienciasPageModule {}
