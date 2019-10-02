import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var x = new Date(Date.UTC(2019, 2, 17, 16 - 11, 10, 0));
    console.log(x);
    console.log("Melbourne: " + x.toLocaleString("en-US", { timeZone: "Australia/Melbourne" }));
    console.log("Rotterdam: " + x.toLocaleString("en-US", { timeZone: "Europe/Amsterdam" }));
  }
}
