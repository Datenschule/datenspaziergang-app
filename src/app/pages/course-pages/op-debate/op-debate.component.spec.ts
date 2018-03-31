import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpDebateComponent } from './op-debate.component';

describe('OpDebateComponent', () => {
  let component: OpDebateComponent;
  let fixture: ComponentFixture<OpDebateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpDebateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpDebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
