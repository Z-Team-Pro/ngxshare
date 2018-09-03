import { TestBed, inject } from '@angular/core/testing';

import { NgxshareService } from './ngxshare.service';

describe('NgxshareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxshareService]
    });
  });

  it('should be created', inject([NgxshareService], (service: NgxshareService) => {
    expect(service).toBeTruthy();
  }));
});
