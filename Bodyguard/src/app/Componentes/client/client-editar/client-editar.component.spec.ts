import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEditarComponent } from './client-editar.component';

describe('ClientEditarComponent', () => {
  let component: ClientEditarComponent;
  let fixture: ComponentFixture<ClientEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientEditarComponent]
    });
    fixture = TestBed.createComponent(ClientEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
