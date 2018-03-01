import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxLineComponent } from './mapbox-line.component';

describe('MapboxLineComponent', () => {
  let component: MapboxLineComponent;
  let fixture: ComponentFixture<MapboxLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapboxLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboxLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
