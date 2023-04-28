import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementheaderComponent } from './placementheader.component';

describe('PlacementheaderComponent', () => {
  let component: PlacementheaderComponent;
  let fixture: ComponentFixture<PlacementheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
