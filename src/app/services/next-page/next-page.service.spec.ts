import { TestBed, inject } from '@angular/core/testing';

import { NextPageService } from './next-page.service';

describe('NextPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NextPageService]
    });
  });

  it('should be created', inject([NextPageService], (service: NextPageService) => {
    expect(service).toBeTruthy();
  }));
});
