import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';

/**
 * Generated class for the GoalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal-detail',
  templateUrl: 'goal-detail.html',
})
export class GoalDetailPage {

  mDatas = {
    menuTitle: "Goal Detail"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalDetailPage');
  }

  onClickBack(){
    this.navCtrl.setRoot("TabsPage");
  }
}
