import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnFindUserPage } from './on-find-user';

@NgModule({
  declarations: [
    OnFindUserPage,
  ],
  imports: [
    IonicPageModule.forChild(OnFindUserPage),
  ],
})
export class OnFindUserPageModule {}
