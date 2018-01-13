import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { DealsService } from '../../services/deals.service';
import { Deal } from '../../../imports/models/deal';
import { DealAction } from '../../../imports/models/dealAction';

@Component({
  selector: 'page-hub',
  templateUrl: 'hub.html'
})
export class HubPage implements OnInit{

  deals: Observable<Deal[]>;

  constructor(public navCtrl: NavController, private dealsService: DealsService) {
  }

  ngOnInit() {
    this.deals = this.dealsService.getDeals();
  }

  onAction(dealAction: DealAction){
    if (dealAction.actionType === 'view') {
      console.log('View ' + dealAction.deal.name);
    } else {
      console.log('Removed ' + dealAction.deal.name + ' from consumer view');
    }
  }

  // This currently does nothing as we are loading all deals onInit
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
