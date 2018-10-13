import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSpendPage } from './add-spend';

@NgModule({
  declarations: [
    AddSpendPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSpendPage),
  ],
})
export class AddSpendPageModule {}
