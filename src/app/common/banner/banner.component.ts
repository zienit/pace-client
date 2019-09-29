import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('bannerTrigger', [
      transition(':enter', [
        style({
          height: '0'
        }),
        animate('250ms ease-in-out', style({
          height: '*'
        }))
      ]),
      transition(':leave', [
        animate('200ms ease-in-out',
          style({
            height: 0
          }),
        )
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {

  open = false;

  private _message: string;
  private confirmed: boolean;

  @Input() dismiss: string;
  @Input() confirm: string;
  @Output() action = new EventEmitter<boolean>();

  @Input()
  set message(message: string) {
    if (message != null) {
      // setting this.open to true will insert the div into the DOM (*ngIf). This will trigger the :enter animation
      this.open = true;
    }
    this._message = message;
  }

  get message() {
    return this._message;
  }

  constructor() { }

  ngOnInit() {
  }

  onClose(confirmed: boolean) {
    this.confirmed = confirmed;
    // setting this.open to false will remove the div from the DOM (*ngIf). This will trigger the :leave animation
    this.open = false;
  }

  onTriggerDone(event: AnimationEvent) {
    if (event.toState === 'void') {
      // :leave animation is done, now inform the parent which button was clicked.
      this.action.emit(this.confirmed);
    }
  }
}
