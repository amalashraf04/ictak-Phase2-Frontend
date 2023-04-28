import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerHeaderComponent } from './learner-header.component';

describe('LearnerHeaderComponent', () => {
  let component: LearnerHeaderComponent;
  let fixture: ComponentFixture<LearnerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
