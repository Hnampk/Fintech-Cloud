import { TabStore } from './../../state/TabStore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController, AlertController } from 'ionic-angular';
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
    private alertCtrl: AlertController,
    private spendingProvider: SpendingProvider,
    private toastCtrl: ToastController) {
    this.events.subscribe("CostSplitPageReload", data => {
      this.ionViewDidLoad();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CostSplitPage');
    this.spendingProvider.getExpense().subscribe((data: any) => {
      this.expenses = data.content;
    })
  }

  onClickAddExpense() {
    let alert = this.alertCtrl.create({
      title: 'New Expense',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name this expense'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.spendingProvider.createExpense({ name: data.name }).subscribe(data => {
              this.events.publish("CostSplitPageReload",true);
              let toast = this.toastCtrl.create({
                message: 'Expense was added successfully',
                duration: 3000,
                position: 'top'
              });
              toast.present();
            })
          }
        }
      ]
    });
    alert.present();
  }

  onClickExpenseDetail() {
    this.navCtrl.push("ExpenseDetailPage");
  }

  delete(expense) {
    this.spendingProvider.deleteExpense(expense.id).subscribe(data => {
      let toast = this.toastCtrl.create({
        message: 'Expense was deleted successfully',
        duration: 3000,
        position: 'top'
      });
      this.events.publish("CostSplitPageReload", true);
      toast.present();
    })
  }
}
