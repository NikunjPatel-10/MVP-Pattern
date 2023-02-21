import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailContainerComponent } from './user-detail-container.component';

describe('UserDetailContainerComponent', () => {
  let component: UserDetailContainerComponent;
  let fixture: ComponentFixture<UserDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
