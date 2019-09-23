import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  @Input() row: number = 0;
  @Input() column: number = 0;

  style = {
    'background-image': 'url(https://us-east-1-cdn-ui.motorsport.com/817/design/dist/components/flags/flags-50x30/flags-100x60-1_466a02afa94e0eb8371f35e15bb7583d.png)',
    'width': '100px',
    'height': '60px',
    'background-position-x': this.column * -100 + 'px',
    'background-position-y': this.row * -60 + 'px'
  };

  constructor() { }

  ngOnInit() {
  }

}
