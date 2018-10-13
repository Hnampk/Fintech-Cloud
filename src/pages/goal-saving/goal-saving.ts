import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrieflyGoal } from '../../providers/classes/goal';

import { TabStore } from '../../state/TabStore';

@IonicPage()
@Component({
  selector: 'page-goal-saving',
  templateUrl: 'goal-saving.html',
})
export class GoalSavingPage {

  mDatas = {
    menuTitle: "Goal Saving",
  }

  goals: Array<BrieflyGoal> = [
    {
      id: "0001",
      name: "Phu Yen Trip",
      endDate: 1541264400000,
      totalSaved: 7500000,
      totalTarget: 13000000,
      membersArray: [
        {
          id: "00001",
          name: "Nguyen Van A",
          avatar: ""
        },
        {
          id: "00002",
          name: "Mr A",
          avatar: ""
        },
        {
          id: "00003",
          name: "Hello123",
          avatar: ""
        },
        {
          id: "00004",
          name: "ajjjksjdfksjhfsjkdhfksdjfh",
          avatar: ""
        },
      ]
    },
    {
      id: "0002",
      name: "Sapa",
      endDate: 1550077200000,
      totalSaved: 260000,
      totalTarget: 3000000,
      membersArray: [
        {
          id: "00001",
          name: "Nguyen Van A",
          avatar: ""
        }
      ]
    },
    {
      id: "0003",
      name: "Nhau Tat Nien",
      endDate: 1546016400000,
      totalSaved: 15430000,
      totalTarget: 50000000,
      membersArray: [
        {
          id: "00001",
          name: "Nguyen Van A",
          avatar: ""
        },
        {
          id: "00002",
          name: "Mr A",
          avatar: ""
        },
        {
          id: "00004",
          name: "ajjjksjdfksjhfsjkdhfksdjfh",
          avatar: ""
        },
      ]
    },
    {
      id: "0001",
      name: "Phu Yen Trip",
      endDate: 1541264400000,
      totalSaved: 7500000,
      totalTarget: 13000000,
      membersArray: [
        {
          id: "00001",
          name: "Nguyen Van A",
          avatar: ""
        },
        {
          id: "00002",
          name: "Mr A",
          avatar: ""
        },
        {
          id: "00003",
          name: "Hello123",
          avatar: ""
        },
        {
          id: "00004",
          name: "ajjjksjdfksjhfsjkdhfksdjfh",
          avatar: ""
        },
      ]
    },
    {
      id: "0002",
      name: "Sapa",
      endDate: 1550077200000,
      totalSaved: 260000,
      totalTarget: 3000000,
      membersArray: [
        {
          id: "00001",
          name: "Nguyen Van A",
          avatar: ""
        }
      ]
    },
    {
      id: "0003",
      name: "Nhau Tat Nien",
      endDate: 1546016400000,
      totalSaved: 15430000,
      totalTarget: 50000000,
      membersArray: [
        {
          id: "00001",
          name: "Nguyen Van A",
          avatar: ""
        },
        {
          id: "00002",
          name: "Mr A",
          avatar: ""
        },
        {
          id: "00004",
          name: "ajjjksjdfksjhfsjkdhfksdjfh",
          avatar: ""
        },
      ]
    },
    {
      id: "0001",
      name: "Phu Yen Trip",
      endDate: 1541264400000,
      totalSaved: 7500000,
      totalTarget: 13000000,
      membersArray: [
        {
          id: "00001",
          name: "Nguyen Van A",
          avatar: ""
        },
        {
          id: "00002",
          name: "Mr A",
          avatar: ""
        },
        {
          id: "00003",
          name: "Hello123",
          avatar: ""
        },
        {
          id: "00004",
          name: "ajjjksjdfksjhfsjkdhfksdjfh",
          avatar: ""
        },
      ]
    },
    {
      id: "0002",
      name: "Sapa",
      endDate: 1550077200000,
      totalSaved: 260000,
      totalTarget: 3000000,
      membersArray: [
        {
          id: "00001",
          name: "Nguyen Van A",
          avatar: ""
        }
      ]
    },
    {
      id: "0003",
      name: "Nhau Tat Nien",
      endDate: 1546016400000,
      totalSaved: 15430000,
      totalTarget: 50000000,
      membersArray: [
        {
          id: "00001",
          name: "Nguyen Van A",
          avatar: ""
        },
        {
          id: "00002",
          name: "Mr A",
          avatar: ""
        },
        {
          id: "00004",
          name: "ajjjksjdfksjhfsjkdhfksdjfh",
          avatar: ""
        },
      ]
    },
    {
      id: "0001",
      name: "Phu Yen Trip",
      endDate: 1541264400000,
      totalSaved: 7500000,
      totalTarget: 13000000,
      membersArray: [
        {
          id: "00001",
          name: "Nguyen Van A",
          avatar: ""
        },
        {
          id: "00002",
          name: "Mr A",
          avatar: ""
        },
        {
          id: "00003",
          name: "Hello123",
          avatar: ""
        },
        {
          id: "00004",
          name: "ajjjksjdfksjhfsjkdhfksdjfh",
          avatar: ""
        },
      ]
    },
    {
      id: "0002",
      name: "Sapa",
      endDate: 1550077200000,
      totalSaved: 260000,
      totalTarget: 3000000,
      membersArray: [
        {
          id: "00001",
          name: "Nguyen Van A",
          avatar: ""
        }
      ]
    },
    {
      id: "0003",
      name: "Nhau Tat Nien",
      endDate: 1546016400000,
      totalSaved: 15430000,
      totalTarget: 50000000,
      membersArray: [
        {
          id: "00001",
          name: "Nguyen Van A",
          avatar: ""
        },
        {
          id: "00002",
          name: "Mr A",
          avatar: ""
        },
        {
          id: "00004",
          name: "ajjjksjdfksjhfsjkdhfksdjfh",
          avatar: ""
        },
      ]
    },
  ]

  currentTab = 1;

  constructor(public navCtrl: NavController,
    private tabStore: TabStore,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalSavingPage');
  }

  onClickIndividual() {
    this.currentTab = 1;
  }

  onClickGroup() {
    this.currentTab = 2;

  }

  onClickAddGoal() {
    this.tabStore.update(1);
    this.navCtrl.push("AddGoalPage");
  }

  onClickGoalDetail() {
    this.tabStore.update(1);
    this.navCtrl.push("GoalDetailPage");
  }
}
