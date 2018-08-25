import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QTopicsPage } from './q-topics';

@NgModule({
  declarations: [
    QTopicsPage,
  ],
  imports: [
    IonicPageModule.forChild(QTopicsPage),
  ],
})
export class QTopicsPageModule {}
