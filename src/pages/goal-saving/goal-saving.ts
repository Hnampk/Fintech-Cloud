import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GoalSavingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal-saving',
  templateUrl: 'goal-saving.html',
})
export class GoalSavingPage {

  mDatas = {
    menuTitle: "Goal Saving"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalSavingPage');
  }

  onClickAddGoal(){
    this.navCtrl.push("AddGoalPage");
  }

  onClickGoalDetail(){
    this.navCtrl.push("GoalDetailPage");
  }

}
