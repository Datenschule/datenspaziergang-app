import { TestBed, inject } from '@angular/core/testing';

import { MapboxServiceService } from './mapbox-service.service';

describe('MapboxServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapboxServiceService]
    });
  });

  it('should be created', inject([MapboxServiceService], (service: MapboxServiceService) => {
    expect(service).toBeTruthy();
  }));
});
