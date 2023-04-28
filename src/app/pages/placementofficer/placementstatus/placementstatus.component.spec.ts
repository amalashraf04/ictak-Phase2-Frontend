import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementstatusComponent } from './placementstatus.component';

describe('PlacementstatusComponent', () => {
  let component: PlacementstatusComponent;
  let fixture: ComponentFixture<PlacementstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
