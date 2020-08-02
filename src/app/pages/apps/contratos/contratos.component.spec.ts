import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosComponent } from './contratos.component';

describe('ContratosComponent', () => {
  let component: ContratosComponent;
  let fixture: ComponentFixture<ContratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
