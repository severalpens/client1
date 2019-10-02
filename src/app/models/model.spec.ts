import { TestBed } from '@angular/core/testing';
import * as chainModule from './chain';

fdescribe('Model', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const chain: chainModule.Chain = TestBed.get(chainModule.Chain);
    expect(chain).toBeTruthy();
  });
});
