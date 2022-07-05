import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCommercialComponent } from './modif-commercial.component';

describe('ModifCommercialComponent', () => {
  let component: ModifCommercialComponent;
  let fixture: ComponentFixture<ModifCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
