import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACompteComponent } from './a-compte.component';

describe('ACompteComponent', () => {
  let component: ACompteComponent;
  let fixture: ComponentFixture<ACompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
