import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithStatusComponent } from './with-status.component';

describe('ConStatusComponent', () => {
  let component: WithStatusComponent;
  let fixture: ComponentFixture<WithStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
