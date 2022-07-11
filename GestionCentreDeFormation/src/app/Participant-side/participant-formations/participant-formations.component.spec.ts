import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantFormationsComponent } from './participant-formations.component';

describe('ParticipantFormationsComponent', () => {
  let component: ParticipantFormationsComponent;
  let fixture: ComponentFixture<ParticipantFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantFormationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
