import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Goal } from '../../../providers/classes/goal';

/**
 * Generated class for the GoalCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal-create',
  templateUrl: 'goal-create.html',
})
export class GoalCreatePage {
    newGoal: Goal;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.newGoal = navParams.data['goal'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalCreatePage');
    console.log(this.newGoal);
    
  }

}
