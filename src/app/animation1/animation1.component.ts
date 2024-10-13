import { animate, query, sequence, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
@Component({
  selector: 'app-animation1',
  standalone: true,
  imports: [],
  templateUrl: './animation1.component.html',
  styleUrl: './animation1.component.css',
  animations: [
    trigger('slide1', [
      transition('* => *', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0,
        }),
        animate('0.5s ease-out', style({
          transform: 'translateY(0)',
          opacity: 1
        }),)
      ])
    ]),
    trigger('slide2', [

      transition('* => *', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate('1s 0.3s ease-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        }),)
      ])
    ]),
    trigger('slide3', [
      transition('* => *', [
        style({
          transform: 'translateX(100%)',
          opacity: 0
        }),
        animate('1s 0.8s ease-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        }))
      ])
    ]),
  ],
})
export class Animation1Component {

}
