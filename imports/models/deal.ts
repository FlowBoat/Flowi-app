import { DealType } from './dealType';

export interface Deal {
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
  createdAt: Date;
  expiry: Date;
}
