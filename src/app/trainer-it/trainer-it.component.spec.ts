import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerItComponent } from './trainer-it.component';

describe('TrainerItComponent', () => {
  let component: TrainerItComponent;
  let fixture: ComponentFixture<TrainerItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerItComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
