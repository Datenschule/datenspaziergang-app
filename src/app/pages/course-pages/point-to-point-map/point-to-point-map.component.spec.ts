import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointToPointMapComponent } from './point-to-point-map.component';

describe('PointToPointMapComponent', () => {
  let component: PointToPointMapComponent;
  let fixture: ComponentFixture<PointToPointMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointToPointMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointToPointMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
