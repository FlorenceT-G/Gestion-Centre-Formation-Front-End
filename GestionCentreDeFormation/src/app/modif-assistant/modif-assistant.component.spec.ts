import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAssistantComponent } from './modif-assistant.component';

describe('ModifAssistantComponent', () => {
  let component: ModifAssistantComponent;
  let fixture: ComponentFixture<ModifAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAssistantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
