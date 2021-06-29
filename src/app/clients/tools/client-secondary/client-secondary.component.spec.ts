import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSecondaryComponent } from './client-secondary.component';

describe('ClientSecondaryComponent', () => {
  let component: ClientSecondaryComponent;
  let fixture: ComponentFixture<ClientSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSecondaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
