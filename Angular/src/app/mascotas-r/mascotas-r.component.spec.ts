import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasRComponent } from './mascotas-r.component';

describe('MascotasRComponent', () => {
  let component: MascotasRComponent;
  let fixture: ComponentFixture<MascotasRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
