import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireQuizComponent } from './faire-quiz.component';

describe('FaireQuizComponent', () => {
  let component: FaireQuizComponent;
  let fixture: ComponentFixture<FaireQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaireQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaireQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
