import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private route:Router) { }

  ngOnInit() {}

  redirectToHome(){
    this.route.navigate(['home'])
  }

}
