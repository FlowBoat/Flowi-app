import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Injectable()

export class FirestoreService {
  constructor(private afs: AngularFirestore) {}
}
