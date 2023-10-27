import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyListarComponent } from './body-listar.component';

describe('BodyListarComponent', () => {
  let component: BodyListarComponent;
  let fixture: ComponentFixture<BodyListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyListarComponent]
    });
    fixture = TestBed.createComponent(BodyListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
