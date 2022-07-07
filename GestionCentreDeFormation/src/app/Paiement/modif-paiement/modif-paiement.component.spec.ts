import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPaiementComponent } from './modif-paiement.component';

describe('ModifPaiementComponent', () => {
  let component: ModifPaiementComponent;
  let fixture: ComponentFixture<ModifPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifPaiementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
