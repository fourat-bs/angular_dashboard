import { TestBed } from '@angular/core/testing';

import { FackeFormateurServiceService } from './facke-formateur-service.service';

describe('FackeFormateurServiceService', () => {
  let service: FackeFormateurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FackeFormateurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
