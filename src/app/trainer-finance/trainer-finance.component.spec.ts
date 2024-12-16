import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerFinanceComponent } from './trainer-finance.component';

describe('TrainerFinanceComponent', () => {
  let component: TrainerFinanceComponent;
  let fixture: ComponentFixture<TrainerFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerFinanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
