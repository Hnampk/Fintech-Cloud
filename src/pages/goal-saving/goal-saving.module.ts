import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoalSavingPage } from './goal-saving';

@NgModule({
  declarations: [
    GoalSavingPage,
  ],
  imports: [
    IonicPageModule.forChild(GoalSavingPage),
  ],
})
export class GoalSavingPageModule {}
