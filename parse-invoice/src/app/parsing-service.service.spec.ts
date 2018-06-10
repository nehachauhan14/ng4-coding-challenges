import { TestBed, inject } from '@angular/core/testing';

import { ParsingServiceService } from './parsing-service.service';

describe('ParsingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParsingServiceService]
    });
  });

  it('should be created', inject([ParsingServiceService], (service: ParsingServiceService) => {
    expect(service).toBeTruthy();
  }));

    it('should map 0 to value 63 ', inject([ParsingServiceService], (service: ParsingServiceService) => {
      expect(service.mapservice(63)).toEqual(0);
    }));

});
