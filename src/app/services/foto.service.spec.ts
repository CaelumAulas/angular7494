import { TestBed, inject } from '@angular/core/testing';

import { FotoService } from './foto.service';

describe('FotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FotoService]
    });
  });

  it('should be created', inject([FotoService], (service: FotoService) => {
    expect(service).toBeTruthy();
  }));
});
