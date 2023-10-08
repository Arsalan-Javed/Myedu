import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent  implements OnInit {
  activeButton:string = 'Sports';

  setActive(topic: string) {
    this.activeButton = topic;
  }
  constructor() { }

  ngOnInit() {}

}
