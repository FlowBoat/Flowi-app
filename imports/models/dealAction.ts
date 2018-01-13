import { Deal } from './deal';

export interface DealAction {
  actionType: string;
  deal: Deal
}
