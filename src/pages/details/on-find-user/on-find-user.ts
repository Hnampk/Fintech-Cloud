import { SpendingProvider } from './../../../providers/spending/spending';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the OnFindUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-on-find-user',
  templateUrl: 'on-find-user.html',
})
export class OnFindUserPage {

  myInput = "";
  users = [];
  filteredUsers = [];
  constructor(public navCtrl: NavController,
    private mViewController: ViewController,
    private spendingPorvider: SpendingProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.spendingPorvider.getUsers().subscribe((data: any) => {
      console.log("users: ", data);
      this.users = data;
      this.filteredUsers = data;
    });
  }

  onInput(ev) {
    this.filteredUsers = this.users.filter((user) => { return user.username.indexOf(this.myInput) > -1 })
  }

  onCancel(ev) {

  }

  onClickBack() {
    this.mViewController.dismiss();
  }

  onChooseUser(user) {
    this.mViewController.dismiss({user: user});

  }

}
