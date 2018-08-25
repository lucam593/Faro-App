import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeometryPage } from './geometry';

@NgModule({
  declarations: [
    GeometryPage,
  ],
  imports: [
    IonicPageModule.forChild(GeometryPage),
  ],
})
export class GeometryPageModule {}
