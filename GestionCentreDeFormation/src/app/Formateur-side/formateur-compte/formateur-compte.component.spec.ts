import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurCompteComponent } from './formateur-compte.component';

describe('FormateurCompteComponent', () => {
  let component: FormateurCompteComponent;
  let fixture: ComponentFixture<FormateurCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateurCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormateurCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
