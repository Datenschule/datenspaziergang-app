import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaypointDetailComponent } from './waypoint-detail.component';

describe('WaypointDetailComponent', () => {
  let component: WaypointDetailComponent;
  let fixture: ComponentFixture<WaypointDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaypointDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaypointDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
