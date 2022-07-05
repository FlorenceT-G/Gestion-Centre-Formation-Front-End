import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AGestionPaiementsComponent } from './a-gestion-paiements.component';

describe('AGestionPaiementsComponent', () => {
  let component: AGestionPaiementsComponent;
  let fixture: ComponentFixture<AGestionPaiementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AGestionPaiementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AGestionPaiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
