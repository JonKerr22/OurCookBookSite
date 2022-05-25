import { TestBed } from '@angular/core/testing';

import { UserSessionkeyResolverService } from './user-sessionkey-resolver.service';

describe('UserSessionkeyResolverService', () => {
  let service: UserSessionkeyResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSessionkeyResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
