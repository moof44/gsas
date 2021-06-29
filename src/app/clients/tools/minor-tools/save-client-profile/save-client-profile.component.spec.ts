import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveClientProfileComponent } from './save-client-profile.component';

describe('SaveClientProfileComponent', () => {
  let component: SaveClientProfileComponent;
  let fixture: ComponentFixture<SaveClientProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveClientProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveClientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
