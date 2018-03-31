import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDashboardComponent } from './tree-dashboard.component';

describe('TreeDashboardComponent', () => {
  let component: TreeDashboardComponent;
  let fixture: ComponentFixture<TreeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
