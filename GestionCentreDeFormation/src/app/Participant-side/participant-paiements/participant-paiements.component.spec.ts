import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantPaiementsComponent } from './participant-paiements.component';

describe('ParticipantPaiementsComponent', () => {
  let component: ParticipantPaiementsComponent;
  let fixture: ComponentFixture<ParticipantPaiementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantPaiementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantPaiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
