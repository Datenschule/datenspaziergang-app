import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChloroplethMapComponent } from './chloropleth-map.component';

describe('ChloroplethMapComponent', () => {
  let component: ChloroplethMapComponent;
  let fixture: ComponentFixture<ChloroplethMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChloroplethMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChloroplethMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
