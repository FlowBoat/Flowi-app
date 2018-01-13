import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'page-hub',
  templateUrl: 'hub.html'
})
export class HubPage {

  constructor(public navCtrl: NavController, private db: FirestoreService) {
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
