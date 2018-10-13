import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { SpendingProvider } from '../../providers/spending/spending';

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
  expenses = [];
  mDatas = {
    menuTitle: "Expense"
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    private spendingProvider: SpendingProvider) {
      this.events.subscribe("CostSplitPageReload", data=>{
        this.ionViewDidLoad();
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CostSplitPage');
    this.spendingProvider.getExpense().subscribe((data:any) => {
      this.expenses = data.content;
    })
  }

  onClickAddExpense() {
    this.navCtrl.push("AddSpendPage");
  }

  onClickExpenseDetail() {
    this.navCtrl.push("ExpenseDetailPage");
  }
}
