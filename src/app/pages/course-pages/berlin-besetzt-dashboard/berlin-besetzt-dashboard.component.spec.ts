import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerlinBesetztDashboardComponent } from './berlin-besetzt-dashboard.component';

describe('BerlinBesetztDashboardComponent', () => {
  let component: BerlinBesetztDashboardComponent;
  let fixture: ComponentFixture<BerlinBesetztDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerlinBesetztDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerlinBesetztDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
