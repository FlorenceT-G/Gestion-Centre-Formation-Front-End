import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AInscriptionParticipantComponent } from './a-inscription-participant.component';

describe('AInscriptionParticipantComponent', () => {
  let component: AInscriptionParticipantComponent;
  let fixture: ComponentFixture<AInscriptionParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AInscriptionParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AInscriptionParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
