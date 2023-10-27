import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationListarComponent } from './specialization-listar.component';

describe('SpecializationListarComponent', () => {
  let component: SpecializationListarComponent;
  let fixture: ComponentFixture<SpecializationListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecializationListarComponent]
    });
    fixture = TestBed.createComponent(SpecializationListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
