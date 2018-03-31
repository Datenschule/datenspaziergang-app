import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerlinBesetztMapComponent } from './berlin-besetzt-map.component';

describe('BerlinBesetztMapComponent', () => {
  let component: BerlinBesetztMapComponent;
  let fixture: ComponentFixture<BerlinBesetztMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerlinBesetztMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerlinBesetztMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
