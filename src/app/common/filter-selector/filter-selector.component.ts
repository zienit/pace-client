import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css']
})
export class FilterSelectorComponent implements OnInit {

  // @todo immutable: https://angular-2-training-book.rangle.io/change-detection/change_detection_strategy_onpush
  @Input() filters: { name: string, selected: boolean }[];
  @Output() change = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
  }

  onClick(filter: { selected: boolean }) {
    filter.selected = !filter.selected;
    this.change.emit(
      this.filters
        .filter(f => f.selected)
        .map(f => f.name)
    );
  }
}
