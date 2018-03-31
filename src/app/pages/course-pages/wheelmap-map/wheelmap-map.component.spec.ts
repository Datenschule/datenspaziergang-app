import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelmapMapComponent } from './wheelmap-map.component';

describe('WheelmapMapComponent', () => {
  let component: WheelmapMapComponent;
  let fixture: ComponentFixture<WheelmapMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelmapMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelmapMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
