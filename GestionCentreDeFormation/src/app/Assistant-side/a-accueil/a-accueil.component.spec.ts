import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAccueilComponent } from './a-accueil.component';

describe('AAccueilComponent', () => {
  let component: AAccueilComponent;
  let fixture: ComponentFixture<AAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
