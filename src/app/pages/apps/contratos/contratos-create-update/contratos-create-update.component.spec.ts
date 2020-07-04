import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosCreateUpdateComponent } from './contratos-create-update.component';

describe('ContratosCreateUpdateComponent', () => {
  let component: ContratosCreateUpdateComponent;
  let fixture: ComponentFixture<ContratosCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratosCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
