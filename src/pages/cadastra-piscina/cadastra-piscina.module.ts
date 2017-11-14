import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastraPiscinaPage } from './cadastra-piscina';

@NgModule({
  declarations: [
    CadastraPiscinaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastraPiscinaPage),
  ],
})
export class CadastraPiscinaPageModule {}
