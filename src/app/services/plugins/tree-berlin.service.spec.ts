import { TestBed, inject } from '@angular/core/testing';

import { TreeBerlinService } from './tree-berlin.service';

describe('TreeBerlinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeBerlinService]
    });
  });

  it('should be created', inject([TreeBerlinService], (service: TreeBerlinService) => {
    expect(service).toBeTruthy();
  }));
});
