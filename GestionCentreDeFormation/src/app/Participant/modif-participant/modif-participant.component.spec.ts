import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifParticipantComponent } from './modif-participant.component';

describe('ModifParticipantComponent', () => {
  let component: ModifParticipantComponent;
  let fixture: ComponentFixture<ModifParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
