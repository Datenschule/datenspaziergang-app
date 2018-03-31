import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDevelopmentComponent } from './tree-development.component';

describe('TreeDevelopmentComponent', () => {
  let component: TreeDevelopmentComponent;
  let fixture: ComponentFixture<TreeDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
