import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueiladminComponent } from './accueiladmin.component';

describe('AccueiladminComponent', () => {
  let component: AccueiladminComponent;
  let fixture: ComponentFixture<AccueiladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueiladminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueiladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
