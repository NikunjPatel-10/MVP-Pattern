import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailPresentationComponent } from './user-detail-presentation.component';

describe('UserDetailPresentationComponent', () => {
  let component: UserDetailPresentationComponent;
  let fixture: ComponentFixture<UserDetailPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
