import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifquizComponent } from './modifquiz.component';

describe('ModifquizComponent', () => {
  let component: ModifquizComponent;
  let fixture: ComponentFixture<ModifquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifquizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
