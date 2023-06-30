import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFacComponent } from './consulta-fac.component';

describe('ConsultaFacComponent', () => {
  let component: ConsultaFacComponent;
  let fixture: ComponentFixture<ConsultaFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaFacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
