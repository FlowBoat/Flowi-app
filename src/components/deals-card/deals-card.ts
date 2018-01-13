import { Component, Input } from '@angular/core';

import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';
import { Deal } from '../../../imports/models/deal';

@Component({
  selector: 'deals-card',
  templateUrl: 'deals-card.html',
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutLeft', animate(500, keyframes(kf.slideOutLeft)))
    ])
  ]
})
export class DealsCardComponent {

  @Input() deal: Deal;

  animationState: string;

  startAnimation(state) {
    console.log(state);
    if(!this.animationState){
      this.animationState = state
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
