import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementofficerComponent } from './placementofficer.component';

describe('PlacementofficerComponent', () => {
  let component: PlacementofficerComponent;
  let fixture: ComponentFixture<PlacementofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementofficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
