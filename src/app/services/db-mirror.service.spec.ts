import { TestBed } from '@angular/core/testing';

import { DbMirrorService } from './db-mirror.service';

describe('DbMirrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbMirrorService = TestBed.get(DbMirrorService);
    expect(service).toBeTruthy();
  });
});
