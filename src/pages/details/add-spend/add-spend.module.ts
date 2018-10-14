import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSpendPage } from './add-spend';
import { SpendingProvider } from '../../../providers/spending/spending';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    AddSpendPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSpendPage),
    ComponentsModule
  ],
  providers: [
    SpendingProvider
  ]
})
export class AddSpendPageModule {}
