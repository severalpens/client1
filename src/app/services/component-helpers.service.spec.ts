import { TestBed } from '@angular/core/testing';

import { ComponentHelpersService } from './component-helpers.service';

describe('ComponentHelpersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentHelpersService = TestBed.get(ComponentHelpersService);
    expect(service).toBeTruthy();
  });
});
