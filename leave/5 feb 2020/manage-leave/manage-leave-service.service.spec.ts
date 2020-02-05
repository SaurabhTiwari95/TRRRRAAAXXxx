import { TestBed } from '@angular/core/testing';

import { ManageLeaveServiceService } from './manage-leave-service.service';

describe('ManageLeaveServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageLeaveServiceService = TestBed.get(ManageLeaveServiceService);
    expect(service).toBeTruthy();
  });
});
