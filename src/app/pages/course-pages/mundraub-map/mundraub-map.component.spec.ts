import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MundraubMapComponent } from './mundraub-map.component';

describe('MundraubMapComponent', () => {
  let component: MundraubMapComponent;
  let fixture: ComponentFixture<MundraubMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MundraubMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MundraubMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
