import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEmployeesTableComponent } from './client-employees-table.component';

describe('ClientEmployeesComponent', () => {
  let component: ClientEmployeesTableComponent;
  let fixture: ComponentFixture<ClientEmployeesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientEmployeesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEmployeesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
