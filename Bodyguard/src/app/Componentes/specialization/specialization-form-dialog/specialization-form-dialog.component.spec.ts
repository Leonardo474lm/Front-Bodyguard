import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationFormDialogComponent } from './specialization-form-dialog.component';

describe('SpecializationFormDialogComponent', () => {
  let component: SpecializationFormDialogComponent;
  let fixture: ComponentFixture<SpecializationFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecializationFormDialogComponent]
    });
    fixture = TestBed.createComponent(SpecializationFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
