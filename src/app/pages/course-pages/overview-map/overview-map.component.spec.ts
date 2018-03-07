import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewMapComponent } from './overview-map.component';

describe('OverviewMapComponent', () => {
  let component: OverviewMapComponent;
  let fixture: ComponentFixture<OverviewMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
