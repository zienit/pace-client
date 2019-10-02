import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListContentComponent } from './event-list-content.component';

describe('EventListContentComponent', () => {
  let component: EventListContentComponent;
  let fixture: ComponentFixture<EventListContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
