import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-add-spend',
  templateUrl: 'add-spend.html',
})
export class AddSpendPage {

  mDatas = {
    menuTitle: "Add Spend"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSpendPage');
  }

  onClickBack(){
    this.navCtrl.setRoot(TabsPage);
  }
}