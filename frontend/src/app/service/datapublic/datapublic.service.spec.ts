import { TestBed } from '@angular/core/testing';

import { DatapublicService } from './datapublic.service';

describe('DatapublicService', () => {
  let service: DatapublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatapublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
