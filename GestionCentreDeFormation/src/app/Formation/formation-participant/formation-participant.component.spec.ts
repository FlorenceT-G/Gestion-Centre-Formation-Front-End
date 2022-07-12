import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationParticipantComponent } from './formation-participant.component';

describe('FormationParticipantComponent', () => {
  let component: FormationParticipantComponent;
  let fixture: ComponentFixture<FormationParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
