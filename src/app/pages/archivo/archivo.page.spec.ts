import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ArchivoPage } from "./archivo.page";

describe("ArchivoPage", () => {
  let component: ArchivoPage;
  let fixture: ComponentFixture<ArchivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivoPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
