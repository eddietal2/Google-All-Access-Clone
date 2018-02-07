import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';


@Component({
  selector: 'topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css'],
  animations: [

    // Apps
    trigger('slide-down-app', [

      state('up', style({
        transform: 'translateY(0px)',
        opacity: '0',
        zIndex: '9'
      })),
      state('down', style({
        transform: 'translateY(460px)',
        opacity: '1',
        zIndex: '999'
      })),

      transition('up <=> down',
      animate('500ms ease-out'))
    ]),

    // Notifications
    trigger('slide-down-noti', [

      state('up', style({
        transform: 'translateY(0px)',
        opacity: '0',
        zIndex: '9'
      })),
      state('down', style({
        transform: 'translateY(460px)',
        opacity: '1',
        zIndex: '999'
      })),

      transition('up <=> down',
      animate('500ms ease-out'))
    ]),

    // Account
    trigger('slide-down-acc', [

      state('up', style({
        transform: 'translateX(0px)',
        opacity: '0',
        display: 'none'
      })),
      state('down', style({
        transform: 'translateX(-400px)',
        opacity: '1',
        display: 'inline'
      })),

      transition('up <=> down',
      animate('500ms ease-out'))
    ]),

    // Left Menu
    trigger('slide-out-left-menu', [

      state('open', style({
        transform: 'translateX(0px)',
        opacity: '1',
      })),
      state('close', style({
        transform: 'translateX(-460px)',
        opacity: '1'
      })),

      transition('open <=> close',
      animate('500ms ease-out'))
    ]),
  ]
})
export class TopnavComponent {

  appState: string = 'up';
  notiState: string = 'up';
  accState: string = 'up';
  leftMenuState: string = 'close';

  animateApps() {
    this.appState = (this.appState === 'up' ? 'down' : 'up');
    if(this.notiState = 'down') {
      this.notiState = 'up'
    }
    if(this.accState = 'down') {
      this.accState = 'up'
    }
  }

  animateNoti() {
    this.notiState = (this.notiState === 'up' ? 'down' : 'up');
    if(this.appState = 'down') {
      this.appState = 'up'
    }
    if(this.accState = 'down') {
      this.accState = 'up'
    }
  }

  animateAcc() {
    this.accState = (this.accState === 'up' ? 'down' : 'up');
    if(this.notiState = 'down') {
      this.notiState = 'up'
    }
    if(this.appState = 'down') {
      this.appState = 'up'
    }
  }

  animateLeft() {
    this.leftMenuState = (this.leftMenuState === 'open' ? 'close' : 'open');
  }
}
