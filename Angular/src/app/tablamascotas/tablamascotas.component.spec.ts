import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablamascotasComponent } from './tablamascotas.component';

describe('TablamascotasComponent', () => {
  let component: TablamascotasComponent;
  let fixture: ComponentFixture<TablamascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablamascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablamascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
