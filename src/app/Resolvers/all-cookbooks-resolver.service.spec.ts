import { TestBed } from '@angular/core/testing';

import { AllCookbooksResolver } from './all-cookbooks-resolver.service';

describe('AllCookbooksResolverService', () => {
  let service: AllCookbooksResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCookbooksResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
