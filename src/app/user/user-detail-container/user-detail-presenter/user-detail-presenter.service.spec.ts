import { TestBed } from '@angular/core/testing';

import { UserDetailPresenterService } from './user-detail-presenter.service';

describe('UserDetailPresenterService', () => {
  let service: UserDetailPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetailPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
