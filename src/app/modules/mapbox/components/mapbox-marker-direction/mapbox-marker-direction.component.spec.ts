import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxMarkerDirectionComponent } from './mapbox-marker-direction.component';

describe('MapboxMarkerDirectionComponent', () => {
  let component: MapboxMarkerDirectionComponent;
  let fixture: ComponentFixture<MapboxMarkerDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapboxMarkerDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboxMarkerDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
