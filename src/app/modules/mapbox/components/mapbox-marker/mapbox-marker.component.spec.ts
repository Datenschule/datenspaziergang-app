import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxMarkerComponent } from './mapbox-marker.component';

describe('MapboxMarkerComponent', () => {
  let component: MapboxMarkerComponent;
  let fixture: ComponentFixture<MapboxMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapboxMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboxMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
