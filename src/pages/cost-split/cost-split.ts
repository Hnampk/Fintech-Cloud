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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CostSplitPage');
  }

  onClickAddExpense(){
    this.navCtrl.push("AddSpendPage");
  }

  onClickExpenseDetail(){
    this.navCtrl.push("ExpenseDetailPage");
  }
}
