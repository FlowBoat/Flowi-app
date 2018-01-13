import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';

import { Deal } from '../../imports/models/deal';

@Injectable()
export class DealsService {

  constructor(private db: FirestoreService) { };

  getDeals() {
    return this.db.col$<Deal>('Deals', ref => ref.orderBy('createdAt'));
  }
}
