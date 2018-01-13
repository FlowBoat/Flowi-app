import { Component, EventEmitter, Input, Output } from '@angular/core';

import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';
import { Deal } from '../../../imports/models/deal';
import { DealAction } from '../../../imports/models/dealAction';

@Component({
  selector: 'deals-card',
  templateUrl: 'deals-card.html',
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutLeft', animate(500, keyframes(kf.slideOutLeft))),
      transition('* => zoomOutRight', animate(500, keyframes(kf.zoomOutRight)))
    ])
  ]
})
export class DealsCardComponent {

  @Input() deal: Deal;
  @Output() onAction = new EventEmitter<DealAction>();
  visible = true;

  animationState: string;

  rightSwipe() {
    this.startAnimation('zoomOutRight');
    this.onAction.emit({ actionType: 'view', deal: this.deal });
  }

  leftSwipe() {
    this.startAnimation('slideOutLeft');
    this.onAction.emit({ actionType: 'remove', deal: this.deal });
  }

  startAnimation(state) {
    console.log(state);
    if(!this.animationState){
      this.animationState = state
    }
  }

  resetAnimationState() {
    if (this.animationState === 'slideOutLeft') {
      this.visible = false;
    }
    this.animationState = '';
  }
}
