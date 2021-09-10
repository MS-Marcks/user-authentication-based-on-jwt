import { TestBed } from '@angular/core/testing';

import { DataprivateService } from './dataprivate.service';

describe('DataprivateService', () => {
  let service: DataprivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataprivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
