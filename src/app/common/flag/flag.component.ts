import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  @Input() country: string;

  private countries: { [country: string]: { row: number, col: number } } = {
    'usa': { row: 0, col: 1 },
    'ita': { row: 0, col: 2 },
    'gbr': { row: 0, col: 3 },
    'deu': { row: 0, col: 4 },
    'esp': { row: 0, col: 5 },
    'fra': { row: 0, col: 6 },
    'aus': { row: 0, col: 7 },
    'jap': { row: 0, col: 8 },
    'can': { row: 0, col: 9 },
    'bel': { row: 1, col: 0 },
    'nld': { row: 1, col: 1 },
    'rus': { row: 1, col: 8 },
    'mex': { row: 2, col: 1 },
    'mco': { row: 2, col: 6 },
    'tha': { row: 3, col: 3 },
    'fin': { row: 3, col: 7 },
    'pol': { row: 4, col: 5 },
    'dnk': { row: 6, col: 6 }
  };

  get style() {
    return {
      'background-image': 'url(https://us-east-1-cdn-ui.motorsport.com/817/design/dist/components/flags/flags-50x30/flags-100x60-1_466a02afa94e0eb8371f35e15bb7583d.png)',
      'width': '100px',
      'height': '60px',
      'background-position-x': this.countries[this.country].col * -100 + 'px',
      'background-position-y': this.countries[this.country].row * -60 + 'px'
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
