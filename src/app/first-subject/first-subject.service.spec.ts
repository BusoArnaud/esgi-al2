import { TestBed } from '@angular/core/testing';

import { FirstSubjectService } from './first-subject.service';

describe('FirstSubjectService', () => {
  let service: FirstSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
