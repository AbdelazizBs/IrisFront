import { TestBed } from '@angular/core/testing';

import { EtapeProductionServiceService } from './etape-production-service.service';

describe('EtapeProductionServiceService', () => {
  let service: EtapeProductionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtapeProductionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
