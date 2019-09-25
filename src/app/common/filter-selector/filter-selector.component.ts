import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css']
})
export class FilterSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() filters: { name: string, selected: boolean }[];

  onClick(filter: { selected: boolean }) {
    filter.selected = !filter.selected;
  }
}
