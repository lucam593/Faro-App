import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QRandomPage } from './q-random';

@NgModule({
  declarations: [
    QRandomPage,
  ],
  imports: [
    IonicPageModule.forChild(QRandomPage),
  ],
})
export class QRandomPageModule {}
