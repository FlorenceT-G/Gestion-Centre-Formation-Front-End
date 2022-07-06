import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAjoutContactComponent } from './c-ajout-contact.component';

describe('CAjoutContactComponent', () => {
  let component: CAjoutContactComponent;
  let fixture: ComponentFixture<CAjoutContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAjoutContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAjoutContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
