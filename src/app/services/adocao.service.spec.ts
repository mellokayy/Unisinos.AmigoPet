import { TestBed } from '@angular/core/testing';

import { adocao } from './adocao.service';

describe('AdocaoService', () => {
  let service: adocao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(adocao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
