import { Bill } from './../../../providers/classes/expense';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabStore } from '../../../state/TabStore';

@IonicPage()
@Component({
  selector: 'page-expense-bill-detail',
  templateUrl: 'expense-bill-detail.html',
})
export class ExpenseBillDetailPage {

  mDatas = {
    title: "Bill Detail",
  }

  bill: Bill;

  constructor(public navCtrl: NavController,
    private tabStore: TabStore,
    public navParams: NavParams) {

    if (navParams.data['bill'])
      this.bill = navParams.data['bill'];

    console.log(this.bill);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseBillDetailPage');
  }

  onClickBack() {
    this.tabStore.update(0);
    this.navCtrl.pop();
  }
}
