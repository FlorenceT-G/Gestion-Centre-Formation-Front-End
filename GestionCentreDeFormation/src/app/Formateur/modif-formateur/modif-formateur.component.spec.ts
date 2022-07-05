import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifFormateurComponent } from './modif-formateur.component';

describe('ModifFormateurComponent', () => {
  let component: ModifFormateurComponent;
  let fixture: ComponentFixture<ModifFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
