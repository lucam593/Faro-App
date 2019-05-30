import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatematicaPage } from './matematica';

@NgModule({
  declarations: [
    MatematicaPage,
  ],
  imports: [
    IonicPageModule.forChild(MatematicaPage),
  ],
})
export class MatematicaPageModule {}
