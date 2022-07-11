import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantAccueilComponent } from './participant-accueil.component';

describe('ParticipantAccueilComponent', () => {
  let component: ParticipantAccueilComponent;
  let fixture: ComponentFixture<ParticipantAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
