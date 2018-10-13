import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddGoalPage } from './add-goal';
import {ComponentsModule} from '../../../components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    AddGoalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddGoalPage),
    ComponentsModule,
    PipesModule
  ],
})
export class AddGoalPageModule {}
