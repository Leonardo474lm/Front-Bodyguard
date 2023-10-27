import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyEditarComponent } from './body-editar.component';

describe('BodyEditarComponent', () => {
  let component: BodyEditarComponent;
  let fixture: ComponentFixture<BodyEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyEditarComponent]
    });
    fixture = TestBed.createComponent(BodyEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
