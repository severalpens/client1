import { TestBed } from '@angular/core/testing';

import { SockettestService } from './sockettest.service';

describe('SockettestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SockettestService = TestBed.get(SockettestService);
    expect(service).toBeTruthy();
  });
});
