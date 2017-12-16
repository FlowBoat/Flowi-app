import * as firebase from 'firebase';
import GeoPoint = firebase.firestore.GeoPoint;

export interface Business {
  name: string;
  description: string;
  established: Date;
  lastUpdated: Date;
  location: GeoPoint;
}
