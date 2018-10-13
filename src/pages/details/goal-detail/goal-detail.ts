import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';
import { TabStore } from '../../../state/TabStore';

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

  constructor(public navCtrl: NavController,
    private tabStore: TabStore,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalDetailPage');
  }

  onClickBack(){
    this.tabStore.update(1);
    this.navCtrl.setRoot(TabsPage);
  }
}
