import { Injectable } from '@angular/core';
import { ProjectConstant } from '../../constants/project.constant';
import { AuthToken } from '../../models/auth-token.interface';

import { ParticipantInvitationState } from '../../models/participant-invitation-state.enum';
import { ParticipantRole } from '../../models/participant-role.enum';
import { ProjectParticipant } from '../../models/project-participant.interface';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectParticipantService {
  private allParticipants: ProjectParticipant[] = [];

  private participants: ProjectParticipant[] = [];

  constructor(private utils: UtilsService) {}

  /**
   * Get participants of project selected
   * @param authToken token
   * @param projectId project id
   * @returns participants of project
   */
  getParticipants(
    authToken: AuthToken,
    projectId: number
  ): Promise<ProjectParticipant[]> {
    if (authToken !== ProjectConstant.mockAuthToken) {
      return Promise.reject(new Error());
    }
    this.participants = this.allParticipants.filter(
      (item) => item.projectId === projectId
    );

    return this.utils.mockSendResult(this.participants);
  }

  async addParticipant(
    authToken: AuthToken,
    projectId: number,
    email: string,
    name: string,
    company: string,
    jobTitle: string,
    role: ParticipantRole
  ): Promise<ProjectParticipant> {
    if (authToken !== ProjectConstant.mockAuthToken) {
      throw new Error();
    }
    const participant: ProjectParticipant = {
      email: email,
      name: name,
      company: company,
      jobTitle: jobTitle,
      projectId: projectId,
      role: role,
      state: ParticipantInvitationState.PENDING,
    };
    await this.utils.mockSendResult(null);

    this.allParticipants.push(participant);
    // this._participantsMockStorage.push(participant);
    return participant;
  }
}
