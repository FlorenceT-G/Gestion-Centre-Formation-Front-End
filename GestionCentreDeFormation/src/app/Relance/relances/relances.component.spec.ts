import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelancesComponent } from './relances.component';

describe('RelancesComponent', () => {
  let component: RelancesComponent;
  let fixture: ComponentFixture<RelancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
