import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateleanerComponent } from './updateleaner.component';

describe('UpdateleanerComponent', () => {
  let component: UpdateleanerComponent;
  let fixture: ComponentFixture<UpdateleanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateleanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
