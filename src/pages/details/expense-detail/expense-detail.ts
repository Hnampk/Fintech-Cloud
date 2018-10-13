import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';
import { TabStore } from '../../../state/TabStore';

@IonicPage()
@Component({
  selector: 'page-expense-detail',
  templateUrl: 'expense-detail.html',
})
export class ExpenseDetailPage {

  mDatas = {
    menuTitle: "Expense Detail"
  }

  constructor(public navCtrl: NavController,
    private tabStore: TabStore,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseDetailPage');
  }

  onClickBack(){
    this.tabStore.update(0);
    this.navCtrl.setRoot(TabsPage);
  }
}
