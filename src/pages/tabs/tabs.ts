import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "CostSplitPage";
  tab2Root = "GoalSavingPage";
  tab3Root = "NotiPage";
  tab4Root = "MorePage";

  constructor() {

  }
}
