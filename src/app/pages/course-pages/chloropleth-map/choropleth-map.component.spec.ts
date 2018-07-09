import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoroplethMapComponent } from './choropleth-map.component';

describe('ChoroplethMapComponent', () => {
  let component: ChoroplethMapComponent;
  let fixture: ComponentFixture<ChoroplethMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoroplethMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoroplethMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
