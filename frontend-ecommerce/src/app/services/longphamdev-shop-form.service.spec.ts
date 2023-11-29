import { TestBed } from '@angular/core/testing';

import { LongphamdevShopFormService } from './longphamdev-shop-form.service';

describe('LongphamdevShopFormService', () => {
  let service: LongphamdevShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LongphamdevShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
