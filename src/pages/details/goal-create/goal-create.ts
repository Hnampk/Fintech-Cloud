import { User } from './../../../providers/classes/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ViewController } from 'ionic-angular';
import { Goal } from '../../../providers/classes/goal';
import { MemberTarget } from '../../../providers/classes/target';


@IonicPage()
@Component({
  selector: 'page-goal-create',
  templateUrl: 'goal-create.html',
})
export class GoalCreatePage {
  newGoal: Goal;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private mViewController: ViewController,
    public navParams: NavParams) {
    // this.newGoal = navParams.data['goal'];
    this.newGoal = new Goal();
    this.newGoal.id = "";
    this.newGoal.name = "asdfasdfd";
    this.newGoal.startDate = 1539486030924;
    this.newGoal.endDate = 1539486041079;
    this.newGoal.totalTarget = 1000000;

    this.newGoal.addMember({ id: "1", name: "You", avatar: "" }, 0);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalCreatePage');
    console.log(this.newGoal);

  }

  onFindUser() {
    let modal = this.modalCtrl.create("OnFindUserPage", {});
    modal.onWillDismiss(data => {
      if (data) {
        let user = data['user'];
        let doubleCheck = this.newGoal.memberTargets.filter((member: MemberTarget) => { return member.memberId == user.id });
        if (doubleCheck.length > 0) {
            this.onClickEditTarget(doubleCheck[0]);
        }
        else{
          this.addTarget(data['user'].id, data['user'].username);
        }
      }
    })
    modal.present();
  }

  addTarget(userid, username) {

    let alert = this.alertCtrl.create({
      title: "Set " + username + "\'s payment",
      inputs: [
        {
          name: 'target',
          placeholder: 'How much?',
          type: 'number',
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

            let user = new User();
            user.id = userid;
            user.name = username;
            user.avatar = "";
            if (data.target) {
              this.newGoal.addMember(user, data.target);
            }
            else {
              this.newGoal.addMember(user, 0);
            }
          }
        }
      ]
    });
    alert.present();
  }

  onClickEditTarget(target: MemberTarget) {

    let alert = this.alertCtrl.create({
      title: "Set " + target.memberName + "\'s payment",
      inputs: [
        {
          name: 'target',
          placeholder: 'How much?',
          type: 'number',
          value: target.target + ""
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
            if (data.target) {
              target.target = data.target;
            }
            else {
              target.target = 0;
            }
          }
        }
      ]
    });
    alert.present();
  }

  onClickSave(){
    this.mViewController.dismiss({success: 1});
  }
}
