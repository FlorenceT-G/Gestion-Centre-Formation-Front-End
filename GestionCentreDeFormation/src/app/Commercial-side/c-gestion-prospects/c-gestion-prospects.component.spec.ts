import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGestionProspectsComponent } from './c-gestion-prospects.component';

describe('CGestionProspectsComponent', () => {
  let component: CGestionProspectsComponent;
  let fixture: ComponentFixture<CGestionProspectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CGestionProspectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CGestionProspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
