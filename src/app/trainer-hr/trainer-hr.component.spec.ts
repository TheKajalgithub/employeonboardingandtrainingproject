import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerHrComponent } from './trainer-hr.component';

describe('TrainerHrComponent', () => {
  let component: TrainerHrComponent;
  let fixture: ComponentFixture<TrainerHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerHrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
