import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerSalesComponent } from './trainer-sales.component';

describe('TrainerSalesComponent', () => {
  let component: TrainerSalesComponent;
  let fixture: ComponentFixture<TrainerSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
