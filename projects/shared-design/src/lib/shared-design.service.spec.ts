import { TestBed } from '@angular/core/testing';

import { SharedDesignService } from './shared-design.service';

describe('SharedDesignService', () => {
  let service: SharedDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
