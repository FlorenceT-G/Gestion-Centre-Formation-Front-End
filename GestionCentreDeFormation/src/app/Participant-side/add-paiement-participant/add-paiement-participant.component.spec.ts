import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaiementParticipantComponent } from './add-paiement-participant.component';

describe('AddPaiementParticipantComponent', () => {
  let component: AddPaiementParticipantComponent;
  let fixture: ComponentFixture<AddPaiementParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaiementParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaiementParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
