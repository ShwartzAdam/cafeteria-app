import { TestBed, inject } from '@angular/core/testing';

import { ForgotpassService } from './forgotpass.service';

describe('ForgotpassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgotpassService]
    });
  });

  it('should be created', inject([ForgotpassService], (service: ForgotpassService) => {
    expect(service).toBeTruthy();
  }));
});
