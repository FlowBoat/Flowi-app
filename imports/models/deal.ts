import * as firebase from "firebase";
import { DealType } from './dealType';
import { DocPredicate } from '../../src/shared/firestore.service';

export interface Deal {
  business: DocPredicate<any>;
  name: string;
  description: string;
  tags: Array<string>;
  specs: {
    type: DealType;
    value: number;
    minSpending: number;
    maxSpending: number;
  };
  image: {
    src: string;
    caption: string;
  }
  expiry: Date;
  createdAt: firebase.firestore.FieldValue;
  updatedAt?: firebase.firestore.FieldValue;
}

export class DealModel implements Deal {
  // Property Redeclaration
  createdAt: firebase.firestore.FieldValue;
  business: DocPredicate<any>;
  name: string;
  description: string;
  image: {
    src: string,
    caption: string
  };
  specs: {
    type: DealType,
    value: number,
    minSpending: number,
    maxSpending: number
  };
  expiry: Date;
  tags: Array<string>;

  constructor(business: DocPredicate<any>,
              name: string,
              description: string = '',
              caption: string = '',
              src: string = '',
              type: DealType,
              value: number,
              minSpending: number = null,
              maxSpending: number = null,
              tags: Array<string> = [],
              expiry: Date) {
    // Populating Metadata
    this.business = business;
    this.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    this.expiry = expiry;

    // Content
    this.name = name;
    this.description = description;

    // Image
    this.image.src = src;
    this.image.caption = caption;

    // Specs and Tags
    this.specs.maxSpending = maxSpending;
    this.specs.minSpending = minSpending;
    this.specs.type = type;
    this.specs.value = value;

    this.tags = tags;
  }
}
