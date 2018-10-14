import { Bill, Payment } from './../../../providers/classes/expense';
import { TabStore } from './../../../state/TabStore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events, AlertController } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';
import { SpendingProvider } from '../../../providers/spending/spending';

@IonicPage()
@Component({
  selector: 'page-add-spend',
  templateUrl: 'add-spend.html',
})
export class AddSpendPage {

  mDatas = {
    menuTitle: "New Spend",
    currentTime: new Date(),
    isShowingDatePicker: false,
    currentDateView: new Date(),
  }

  bill: Bill;
  expenseId: number;
  constructor(
    public navCtrl: NavController,
    public events: Events,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private mToastController: ToastController,
    private spendingPorvider: SpendingProvider,
    private toastCtrl: ToastController) {
    this.bill = new Bill()
    this.expenseId = this.navParams.get("expenseId");
  }

  tabBarElement;
  ionViewWillEnter() {

    this.tabBarElement = document.getElementsByClassName('show-tabbar').item(0);
    console.log(this.tabBarElement);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSpendPage');
  }

  onClickBack() {
    this.navCtrl.pop();
  }

  onClickInput() {

  }

  save() {
    this.spendingPorvider.createExpense({

    }).subscribe(data => {
      let toast = this.toastCtrl.create({
        message: 'Expense was added successfully',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        this.events.publish("CostSplitPageReload", true);
        this.navCtrl.pop();
      });
      toast.present();
    })
  }

  cancel() {
    this.navCtrl.pop();
  }

  onClickAddMember() {
    this.presentPrompt();
  }

  onClickSave() {
    console.log("onClickSave");

  }

  onClickEditName() {

  }

  onCancelDatePicker() {
    this.showTabbar();
    this.mDatas.isShowingDatePicker = false;
  }

  onShowDatePicker() {
    this.hideTabbar();
    this.mDatas.isShowingDatePicker = true;
  }

  onDatePickerChanged(data) {
    this.showTabbar();
    this.mDatas.isShowingDatePicker = false;

    this.bill.createdDate = new Date(data['year'], data['month'] - 1, data['date']);

    console.log(this.bill);

  }

  hideTabbar() {
    if (this.tabBarElement && this.tabBarElement.classList.contains("show-tabbar")) {
      this.tabBarElement.classList.remove("show-tabbar")
    }
  }

  showTabbar() {
    if (this.tabBarElement && !this.tabBarElement.classList.contains("show-tabbar")) {
      this.tabBarElement.classList.add("show-tabbar")
    }
  }
  
  onEditPayment(payment:Payment){
    let alert = this.alertCtrl.create({
      title: "Edit member's payment",
      inputs: [
        {
          name: 'name',
          placeholder: 'Who?',
          value: payment.owner.name

        },
        {
          name: 'mustPay',
          placeholder: 'Must Pay?',
          type: 'number',
          value: payment.mustPay + ""
        },
        {
          name: 'hasPaid',
          placeholder: 'Has Paid?',
          type: 'number',
          value: payment.hasPaid + ""
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if(data.name != ""){        
              payment.onResponseData("", data.mustPay, data.hasPaid);
              payment.owner.name = data.name;
            }
            else{
              let toast = this.mToastController.create({
                message: 'Empty name!',
                duration: 2000,
                position: 'bottom'
              });
        
              toast.present();
            }
          }
        }
      ]
    });
    alert.present();
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: "Add new member",
      inputs: [
        {
          name: 'name',
          placeholder: 'Who?'
        },
        {
          name: 'mustPay',
          placeholder: 'Must Pay?',
          type: 'number'
        },
        {
          name: 'hasPaid',
          placeholder: 'Has Paid?',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if(data.name != ""){
              let payment = new Payment();            
              payment.onResponseData("", data.mustPay, data.hasPaid);
              payment.owner.name = data.name;
              this.bill.payments.push(payment);
            }
            else{
              let toast = this.mToastController.create({
                message: 'Empty name!',
                duration: 2000,
                position: 'bottom'
              });
        
              toast.present();
            }
          }
        }
      ]
    });
    alert.present();
  }
  onClickAddSpend(){
    let data = {
      description: this.bill.name,
      amount: this.bill.totalCost,
      spendingId: this.expenseId,
      involve: []
    }
    this.bill.payments.forEach(ele=>{
      data.involve.push({
        "hasPay": ele.hasPaid,
        "mustPay": ele.mustPay,
        "user": {
          "id": ele.owner.id || 1
        }
      })
    })
    this.spendingPorvider.saveExpenseDetail(this.expenseId, data).subscribe(data=>{
      console.log(data);
    })
    console.log(data)
  }
}
