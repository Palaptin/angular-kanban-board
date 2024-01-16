import { TestBed } from '@angular/core/testing';

import { DummyTempDbService } from './dummy-temp-db.service';

describe('DummyTempDbService', () => {
  let service: DummyTempDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyTempDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
