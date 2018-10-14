import { Expense, Bill } from './../../../providers/classes/expense';
import { SpendingProvider } from './../../../providers/spending/spending';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
    private alertCtrl: AlertController,
    public navParams: NavParams) {
    if (navParams.data['id']) {
      this.mDatas.expenseId = navParams.data['id'];
    }
    if (navParams.data['name']) {
      this.mDatas.expenseName = navParams.data['name'];
    }


    
  }

  ionViewDidEnter(){
    this.spendingProvider.getExpenseDetail(this.mDatas.expenseId).subscribe((data: any) => {
      // this.spendingProvider.getExpenseDetail(23).subscribe((data: any) => {
        if(!(data.length == this.bills.length)){
          this.bills=[];
      data.forEach(bill => {
        let newBill = new Bill();

        newBill.onResponseData(bill.id, bill.description, bill.amount, bill.createdDate, bill.involve);
        this.bills.push(newBill)
      });
        }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseDetailPage');
  }

  onClickBack() {
    this.tabStore.update(0);
    this.navCtrl.setRoot(TabsPage);
  }
  onClickSplitCost() {
    var message = '';
    var listPay = [].concat.apply([], this.bills.map(ele => ele.payments));
    var people = {};
    listPay.forEach(pay => {
      if (!people[pay.owner.id]) {
        people[pay.owner.id] = {}
        people[pay.owner.id]['paid'] = 0;
        people[pay.owner.id]['info'] = pay.owner;
      }
      people[pay.owner.id]['paid'] += pay.hasPaid - pay.mustPay;
    })
    
    var sortedPeople = Object.keys(people).map(key => people[key]).sort((personA, personB) => personA.paid - personB.paid);
    var i = 0;
    var j = sortedPeople.length - 1;
    var debt;
    while (i < j) {
      debt = Math.min(-(sortedPeople[i].paid), sortedPeople[j].paid)
      sortedPeople[i].paid += debt;
      sortedPeople[j].paid -= debt;
      message +=`${sortedPeople[i].info.name} owes ${sortedPeople[j].info.name} $${debt}`;
      message += "<br/>"
      console.log(`${sortedPeople[i].info.name} owes ${sortedPeople[j].info.name} $${debt}`);

      if (sortedPeople[i].paid === 0) {
        i++;
      }

      if (sortedPeople[j].paid === 0) {
        j--;
      }
    }
    let alert = this.alertCtrl.create({
      title: 'Split Cost',
      message: message,
      buttons: [
        {
          text: 'OK'
        }
      ]
    });
    alert.present();
  }


  onClickBill(bill) {
    this.navCtrl.push("ExpenseBillDetailPage", { "bill": bill });
  }

  onClickAddSpend() {
    this.navCtrl.push("AddSpendPage", { "expenseId": this.mDatas.expenseId });

  }
}

