import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAccueilComponent } from './c-accueil.component';

describe('CAccueilComponent', () => {
  let component: CAccueilComponent;
  let fixture: ComponentFixture<CAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
