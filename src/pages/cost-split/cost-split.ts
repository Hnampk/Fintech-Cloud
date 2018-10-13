import { TabStore } from './../../state/TabStore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CostSplitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cost-split',
  templateUrl: 'cost-split.html',
})
export class CostSplitPage {

  mDatas = {
    menuTitle: "Expense"
  }

  constructor(public navCtrl: NavController,
    private tabStore: TabStore,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CostSplitPage');
  }

  onClickAddExpense(){
    this.tabStore.update(0);
    this.navCtrl.push("AddSpendPage");
  }

  onClickExpenseDetail(){
    this.tabStore.update(0);
    this.navCtrl.push("ExpenseDetailPage");
  }
}
