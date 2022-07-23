import { TestBed } from '@angular/core/testing';

import { OrdreFabricationServiceService } from './ordre-fabrication-service.service';

describe('OrdreFabricationServiceService', () => {
  let service: OrdreFabricationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdreFabricationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
