import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewLivretComponent } from './user-view-livret.component';

describe('UserViewLivretComponent', () => {
  let component: UserViewLivretComponent;
  let fixture: ComponentFixture<UserViewLivretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewLivretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewLivretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
