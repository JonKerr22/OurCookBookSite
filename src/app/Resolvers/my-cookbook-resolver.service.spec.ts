import { TestBed } from '@angular/core/testing';

import { MyCookbookResolverService } from './my-cookbook-resolver.service';

describe('MyCookbookResolverService', () => {
  let service: MyCookbookResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCookbookResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
