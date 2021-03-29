import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEmployeesProfileComponent } from './client-employees-profile.component';

describe('ClientEmployeesProfileComponent', () => {
  let component: ClientEmployeesProfileComponent;
  let fixture: ComponentFixture<ClientEmployeesProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientEmployeesProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEmployeesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
