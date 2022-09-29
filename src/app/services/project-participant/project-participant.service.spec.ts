import { TestBed } from '@angular/core/testing';

import { ProjectParticipantService } from './project-participant.service';

describe('ProjectParticipantService', () => {
  let service: ProjectParticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectParticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
