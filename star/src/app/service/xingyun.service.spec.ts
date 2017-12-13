import { TestBed, inject } from '@angular/core/testing';

import { XingyunService } from './xingyun.service';

describe('XingyunService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XingyunService]
    });
  });

  it('should be created', inject([XingyunService], (service: XingyunService) => {
    expect(service).toBeTruthy();
  }));
});
