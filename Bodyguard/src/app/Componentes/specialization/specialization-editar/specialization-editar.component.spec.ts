import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationEditarComponent } from './specialization-editar.component';

describe('SpecializationEditarComponent', () => {
  let component: SpecializationEditarComponent;
  let fixture: ComponentFixture<SpecializationEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecializationEditarComponent]
    });
    fixture = TestBed.createComponent(SpecializationEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
