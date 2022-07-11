import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartcipantCompteComponent } from './partcipant-compte.component';

describe('PartcipantCompteComponent', () => {
  let component: PartcipantCompteComponent;
  let fixture: ComponentFixture<PartcipantCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartcipantCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartcipantCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
