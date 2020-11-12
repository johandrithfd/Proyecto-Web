import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertModalFacturaComponent } from './alert-modal-factura.component';

describe('AlertModalFacturaComponent', () => {
  let component: AlertModalFacturaComponent;
  let fixture: ComponentFixture<AlertModalFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertModalFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertModalFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
