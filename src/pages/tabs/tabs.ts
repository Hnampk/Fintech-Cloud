import { Component } from '@angular/core';

import { TabStore } from '../../state/TabStore';
@Component({
  selector: 'my-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  index: number = 0;

  tab1Root = "CostSplitPage";
  tab2Root = "GoalSavingPage";
  tab4Root = "MorePage";

  constructor(private tabStore: TabStore) {
    this.tabStore.index.subscribe((value) => {
      console.log('index', value)
      this.index = value;
    });
  }

  getIndex() {
    return this.index;
  }
}
