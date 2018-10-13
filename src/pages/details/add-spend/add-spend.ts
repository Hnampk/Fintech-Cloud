import { TabStore } from './../../../state/TabStore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';
import { SpendingProvider } from '../../../providers/spending/spending';

@IonicPage()
@Component({
  selector: 'page-add-spend',
  templateUrl: 'add-spend.html',
})
export class AddSpendPage {
  name: string;
  mDatas = {
    menuTitle: "New Spend"
  }

  constructor(
    public navCtrl: NavController,
    public events: Events,
    public navParams: NavParams,
    private spendingPorvider: SpendingProvider,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSpendPage');
  }

  onClickBack() {
    this.navCtrl.setRoot(TabsPage);
  }

  save() {
    this.spendingPorvider.createExpense({ name: this.name }).subscribe(data => {
      let toast = this.toastCtrl.create({
        message: 'Expense was added successfully',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        this.events.publish("CostSplitPageReload",true);
        this.navCtrl.pop();
      });
      toast.present();
    })
  }

  cancel() {
    this.navCtrl.pop();
  }
}
