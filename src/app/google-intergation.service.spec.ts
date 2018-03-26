import { TestBed, inject } from '@angular/core/testing';

import { GoogleIntergationService } from './google-intergation.service';

describe('GoogleIntergationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleIntergationService]
    });
  });

  it('should be created', inject([GoogleIntergationService], (service: GoogleIntergationService) => {
    expect(service).toBeTruthy();
  }));
});
