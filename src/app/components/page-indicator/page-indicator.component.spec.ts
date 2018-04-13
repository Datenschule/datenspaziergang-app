import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIndicatorComponent } from './page-indicator.component';

describe('PageIndicatorComponent', () => {
  let component: PageIndicatorComponent;
  let fixture: ComponentFixture<PageIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
