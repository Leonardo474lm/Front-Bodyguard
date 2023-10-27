import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListarComponent } from './service-listar.component';

describe('ServiceListarComponent', () => {
  let component: ServiceListarComponent;
  let fixture: ComponentFixture<ServiceListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceListarComponent]
    });
    fixture = TestBed.createComponent(ServiceListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
