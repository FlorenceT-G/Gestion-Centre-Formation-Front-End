import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAfficherCrComponent } from './c-afficher-cr.component';

describe('CAfficherCrComponent', () => {
  let component: CAfficherCrComponent;
  let fixture: ComponentFixture<CAfficherCrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAfficherCrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAfficherCrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
