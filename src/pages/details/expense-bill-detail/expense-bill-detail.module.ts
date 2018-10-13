import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseBillDetailPage } from './expense-bill-detail';

@NgModule({
  declarations: [
    ExpenseBillDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseBillDetailPage),
  ],
})
export class ExpenseBillDetailPageModule {}
