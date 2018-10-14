import { User } from './../../../providers/classes/user';
import { Goal } from './../../../providers/classes/goal';
import { TabStore } from './../../../state/TabStore';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController, ToastController } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-add-goal',
  templateUrl: 'add-goal.html',
})
export class AddGoalPage {
  @ViewChild(Slides) slides: Slides;
  mDatas = {
    menuTitle: "New Saving Goal",
    goalTempTotal: "vnd",
    isShowingDatePicker: false,
    currentDateView: new Date(),
    onChooseStartDate: false,
    onChooseEndDate: false
  }

  newGoal: Goal;

  constructor(public navCtrl: NavController,
    private tabStore: TabStore,
    private modalCtrl: ModalController,
    private mToastController: ToastController,
    public navParams: NavParams) {
    this.newGoal = new Goal();
  }

  ionViewWillEnter() {

    this.tabBarElement = document.getElementsByClassName('show-tabbar').item(0);
    console.log(this.tabBarElement);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGoalPage');
    console.log(this.newGoal);

  }

  isComplete() {
    return (this.newGoal.name != "")
      && (this.newGoal.totalTarget > -1)
      && (this.newGoal.startDate > 0)
      && (this.newGoal.endDate > 0)
  }

  onClickBack() {
    this.tabStore.update(1);
    this.navCtrl.setRoot(TabsPage);
  }

  onClickNext() {
    console.log(this.newGoal);

    if (this.isComplete())
      this.slides.slideTo(2, 500);
    else {
      let toast = this.mToastController.create({
        message: 'Please fill all the fields',
        duration: 2000,
        position: 'bottom'
      });

      toast.present();
    }
  }

  onClickConfirm() {

    if (this.isComplete()) {
      let me = new User();
      me.id = "1";
      me.name = "You";
      this.newGoal.addMember(me, 0)
      let profileModal = this.modalCtrl.create("GoalCreatePage", { "goal": this.newGoal });
      profileModal.onWillDismiss((success => {
        if(success){
          this.navCtrl.pop();
        }
      }))
      profileModal.present();
    }
    else {
      this.slides.slideTo(0, 500);
      let toast = this.mToastController.create({
        message: 'Please fill all the fields first',
        duration: 2000,
        position: 'bottom'
      });

      toast.present();
    }

  }

  onCancelDatePicker() {
    this.showTabbar();
    this.mDatas.isShowingDatePicker = false;
    this.mDatas.onChooseEndDate = false;
    this.mDatas.onChooseStartDate = false;
  }


  onClickStartDate() {
    this.onShowDatePicker();
    this.mDatas.onChooseStartDate = true;
  }

  onClickEndDate() {
    this.onShowDatePicker();
    this.mDatas.onChooseEndDate = true;
  }

  tabBarElement
  onShowDatePicker() {
    this.hideTabbar();
    this.mDatas.isShowingDatePicker = true;
  }

  onDatePickerChanged(data) {
    this.showTabbar();
    this.mDatas.isShowingDatePicker = false;

    if (this.mDatas.onChooseStartDate) {
      this.newGoal.startDate = new Date(data['year'], data['month'] - 1, data['date']).getTime();
    }

    if (this.mDatas.onChooseEndDate) {
      this.newGoal.endDate = new Date(data['year'], data['month'] - 1, data['date']).getTime();
    }


    this.mDatas.onChooseEndDate = false;
    this.mDatas.onChooseStartDate = false;
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

  fromMillisToDate(millis: number) {
    if (millis) {
      let date = new Date(millis);
      return (date.getDate() + 1) + "/" + date.getMonth() + "/" + date.getFullYear();
    }
    return null;
  }
}
