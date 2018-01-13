import { Injectable } from '@angular/core';

// RXJS
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/take";
import "rxjs/add/operator/do";

// Firebase
import * as firebase from "firebase";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

// Custom Type Aliases
type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable()
export class FirestoreService {
  constructor(private afs: AngularFirestore) {
  }

  //HELPER FUNCTIONS
  // Return References
  col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.afs.collection<T>(ref, queryFn) : ref;
  }

  doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref;
  }

  //Return Observables
  col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn).snapshotChanges().map(docs => {
      return docs.map(a => a.payload.doc.data()) as T[]
    });
  }

  doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref).snapshotChanges().map(doc => {
      return doc.payload.data() as T
    });
  }

  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp()
  }

  update<T>(ref: DocPredicate<T>, data: any){
    return this.doc(ref).update({
      ...data,
      updatedAt: this.timestamp
    })
  }

  set<T>(ref: DocPredicate<T>, data: any) {
    const timestamp = this.timestamp;
    return this.doc(ref).set({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp
    })
  }

  add<T>(ref: CollectionPredicate<T>, data: any) {
    const timestamp = this.timestamp;
    return this.col(ref).add({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp
    })
  }

  upsert<T>(ref: DocPredicate<T>, data: any) {
    const doc = this.doc(ref).snapshotChanges().take(1).toPromise();

    return doc.then(snap => {
      return snap.payload.exists ? this.update(ref, data) : this.set(ref, data)
    })
  }

  colWithIds$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<any[]> {
    return this.col(ref, queryFn).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  inspectDoc(ref: DocPredicate<any>): void {
    const tick = new Date().getTime();
    this.doc(ref).snapshotChanges()
      .take(1)
      .do(d => {
        const tock = new Date().getTime() - tick;
        console.log('Loaded Document in ${tock}ms', d)
      })
      .subscribe();
  }

  inpsectCol(ref: CollectionPredicate<any>): void {
    const tick = new Date().getTime();
    this.col(ref).snapshotChanges()
      .take(1)
      .do(c => {
        const tock = new Date().getTime() - tick;
        console.log('Locaded Collection in ${tock}ms', c)
      })
      .subscribe();
  }

  geopoint(lat: number, lng: number) {
    return new firebase.firestore.GeoPoint(lat, lng);
  }
}
