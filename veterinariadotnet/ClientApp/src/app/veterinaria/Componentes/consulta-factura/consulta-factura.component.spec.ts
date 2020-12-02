import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFacturaComponent } from './consulta-factura.component';

describe('ConsultaFacturaComponent', () => {
  let component: ConsultaFacturaComponent;
  let fixture: ComponentFixture<ConsultaFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
