import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInOutDatatableComponent } from './cash-in-out-datatable.component';

describe('CashInOutDatatableComponent', () => {
  let component: CashInOutDatatableComponent;
  let fixture: ComponentFixture<CashInOutDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashInOutDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashInOutDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
