import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CostSplitPage } from './cost-split';

@NgModule({
  declarations: [
    CostSplitPage,
  ],
  imports: [
    IonicPageModule.forChild(CostSplitPage),
  ],
})
export class CostSplitPageModule {}
