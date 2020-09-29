import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasugerenciaComponent } from './tablasugerencia.component';

describe('TablasugerenciaComponent', () => {
  let component: TablasugerenciaComponent;
  let fixture: ComponentFixture<TablasugerenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasugerenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasugerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
