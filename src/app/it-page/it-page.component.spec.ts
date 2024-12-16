import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItPageComponent } from './it-page.component';

describe('ItPageComponent', () => {
  let component: ItPageComponent;
  let fixture: ComponentFixture<ItPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
