import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoalCreatePage } from './goal-create';

@NgModule({
  declarations: [
    GoalCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(GoalCreatePage),
  ],
})
export class GoalCreatePageModule {}
