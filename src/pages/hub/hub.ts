import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Services
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'page-hub',
  templateUrl: 'hub.html'
})
export class HubPage {

  constructor(public navCtrl: NavController, private db: FirestoreService) {
  }

}
