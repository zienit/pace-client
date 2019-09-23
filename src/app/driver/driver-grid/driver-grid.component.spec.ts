import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverGridComponent } from './driver-grid.component';

describe('DriverGridComponent', () => {
  let component: DriverGridComponent;
  let fixture: ComponentFixture<DriverGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
