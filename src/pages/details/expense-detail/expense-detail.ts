import { Expense, Bill } from './../../../providers/classes/expense';
import { SpendingProvider } from './../../../providers/spending/spending';
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
    menuTitle: "...",
    expenseId: "",
    expenseName: "..."
  }
  bills: Array<Bill> = [];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }


  constructor(public navCtrl: NavController,
    private tabStore: TabStore,
    private spendingProvider: SpendingProvider,
    public navParams: NavParams) {
    if (navParams.data['id']) {
      this.mDatas.expenseId = navParams.data['id'];
    }
    if (navParams.data['name']) {
      this.mDatas.expenseName = navParams.data['name'];
    }


    // this.spendingProvider.getExpenseDetail(this.mDatas.expenseId).subscribe((data: any) => {
    this.spendingProvider.getExpenseDetail(23).subscribe((data: any) => {
      console.log(data);

      data.forEach(bill => {
        let newBill = new Bill(bill.id, bill.description, bill.amount, bill.createdDate);

        newBill.onResponseData(bill.involve);
        this.bills.push(newBill)
      });

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseDetailPage');
  }

  onClickBack() {    
    this.tabStore.update(0);
    this.navCtrl.setRoot(TabsPage);
  }
  onClickSplitCostNow() {
    console.log("click");
  }
  onClickAddSpendPage() {
    this.navCtrl.push("AddSpendPage");
  }

  onClickBill(bill) {
    this.navCtrl.push("ExpenseBillDetailPage", { "bill": bill });
  }
}

