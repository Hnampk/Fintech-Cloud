import { TabStore } from './../../../state/TabStore';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';
/**
 * Generated class for the AddGoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-goal',
  templateUrl: 'add-goal.html',
})
export class AddGoalPage {
  @ViewChild(Slides) slides: Slides;
  mDatas = {
    menuTitle: "New Saving Goal"
  }

  constructor(public navCtrl: NavController,
    private tabStore: TabStore,
    private modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGoalPage');
  }

  onClickBack() {
    this.tabStore.update(1);
    this.navCtrl.setRoot(TabsPage);
  }

  onClickNext(){
    this.slides.slideTo(2, 500);
  }

  onClickConfirm(){
    let profileModal = this.modalCtrl.create("GoalCreatePage");
    profileModal.present();
  }

}
