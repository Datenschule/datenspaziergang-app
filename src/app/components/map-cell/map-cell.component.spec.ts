import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCellComponent } from './map-cell.component';

describe('MapCellComponent', () => {
  let component: MapCellComponent;
  let fixture: ComponentFixture<MapCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
