import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSpendPage } from './add-spend';
import { SpendingProvider } from '../../../providers/spending/spending';

@NgModule({
  declarations: [
    AddSpendPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSpendPage),
  ],
  providers: [
    SpendingProvider
  ]
})
export class AddSpendPageModule {}
