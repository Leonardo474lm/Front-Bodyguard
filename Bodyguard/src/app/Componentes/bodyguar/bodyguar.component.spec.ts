import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyguarComponent } from './bodyguar.component';

describe('BodyguarComponent', () => {
  let component: BodyguarComponent;
  let fixture: ComponentFixture<BodyguarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyguarComponent]
    });
    fixture = TestBed.createComponent(BodyguarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
