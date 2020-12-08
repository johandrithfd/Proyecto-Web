import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImfoFacturaComponent } from './imfo-factura.component';

describe('ImfoFacturaComponent', () => {
  let component: ImfoFacturaComponent;
  let fixture: ComponentFixture<ImfoFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImfoFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImfoFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
