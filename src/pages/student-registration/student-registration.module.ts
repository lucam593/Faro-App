import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentRegistrationPage } from './student-registration';

@NgModule({
  declarations: [
    StudentRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentRegistrationPage),
  ],
})
export class StudentRegistrationPageModule {}
