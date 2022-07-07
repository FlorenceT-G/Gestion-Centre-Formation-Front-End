import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCompteComponent } from './c-compte.component';

describe('CCompteComponent', () => {
  let component: CCompteComponent;
  let fixture: ComponentFixture<CCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
