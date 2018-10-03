import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConectionErrorPage } from './conection-error';

@NgModule({
  declarations: [
    ConectionErrorPage,
  ],
  imports: [
    IonicPageModule.forChild(ConectionErrorPage),
  ],
})
export class ConectionErrorPageModule {}
