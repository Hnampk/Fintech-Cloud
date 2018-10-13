import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-expense-detail',
  templateUrl: 'expense-detail.html',
})
export class ExpenseDetailPage {

  
  mDatas = {
    menuTitle: "Expense Detail",
    number:"5"
  }
  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man'
  ];
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseDetailPage');
  }

  onClickBack(){
    this.navCtrl.setRoot(TabsPage);
  }
}

