import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let x = new Date(Date.UTC(2019, 2, 17, 16 - 11, 10, 0));
    console.log(x);

    let formatter = new Intl.DateTimeFormat('en-us', {
      weekday: 'short',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      timeZone: 'australia/melbourne'
    });
    console.log(formatter.format(x));
    console.log(formatter.formatToParts(x));
  }
}
