import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('ani', [

      state('in', style({
        transform: 'translateX(0%)',
      })),
      state('out', style({
        transform: 'translateX(100%)',
      })),

      transition('in <=> out',
      animate('1000ms ease-in', keyframes([
        style({ opacity: 0, offset: 0}),
        style({ opacity: 0.5, offset: 0.5}),
        style({ opacity: 1, offset: 1}),
      ]))),
    ])
  ]
})
export class AppComponent {
  state: string = 'in';

  animateMe() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

  title = 'app';
}
