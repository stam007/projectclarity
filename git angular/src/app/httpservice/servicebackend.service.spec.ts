import { TestBed } from '@angular/core/testing';

import { ServicebackendService } from './servicebackend.service';

describe('ServicebackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicebackendService = TestBed.get(ServicebackendService);
    expect(service).toBeTruthy();
  });
});
