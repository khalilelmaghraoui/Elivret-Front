import { TestBed } from '@angular/core/testing';

import { LivretServiceService } from './livret-service.service';

describe('LivretServiceService', () => {
  let service: LivretServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivretServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
