import { TestBed } from '@angular/core/testing';

import { AllRecipesResolverService } from './all-recipes-resolver.service';

describe('AllRecipesResolverService', () => {
  let service: AllRecipesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllRecipesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
