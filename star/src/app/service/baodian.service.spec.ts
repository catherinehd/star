import { TestBed, inject } from '@angular/core/testing';

import { BaodianService } from './baodian.service';

describe('BaodianService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaodianService]
    });
  });

  it('should be created', inject([BaodianService], (service: BaodianService) => {
    expect(service).toBeTruthy();
  }));
});
