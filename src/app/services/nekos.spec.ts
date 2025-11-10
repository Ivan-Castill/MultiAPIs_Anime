import { TestBed } from '@angular/core/testing';

import { Nekos } from './nekos';

describe('Nekos', () => {
  let service: Nekos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Nekos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
