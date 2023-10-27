import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListarComponent } from './client-listar.component';

describe('ClientListarComponent', () => {
  let component: ClientListarComponent;
  let fixture: ComponentFixture<ClientListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientListarComponent]
    });
    fixture = TestBed.createComponent(ClientListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
