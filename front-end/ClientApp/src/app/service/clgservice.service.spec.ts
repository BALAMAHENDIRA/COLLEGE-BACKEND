import { TestBed } from '@angular/core/testing';

import { ClgserviceService } from './clgservice.service';

describe('ClgserviceService', () => {
  let service: ClgserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClgserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
