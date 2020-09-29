import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaadopcionesComponent } from './tablaadopciones.component';

describe('TablaadopcionesComponent', () => {
  let component: TablaadopcionesComponent;
  let fixture: ComponentFixture<TablaadopcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaadopcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaadopcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
