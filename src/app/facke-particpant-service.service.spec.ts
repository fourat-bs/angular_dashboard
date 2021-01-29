import { TestBed } from '@angular/core/testing';

import { FackeParticpantServiceService } from './facke-particpant-service.service';

describe('FackeParticpantServiceService', () => {
  let service: FackeParticpantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FackeParticpantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
