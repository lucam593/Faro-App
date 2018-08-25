import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QExamsPage } from './q-exams';

@NgModule({
  declarations: [
    QExamsPage,
  ],
  imports: [
    IonicPageModule.forChild(QExamsPage),
  ],
})
export class QExamsPageModule {}
