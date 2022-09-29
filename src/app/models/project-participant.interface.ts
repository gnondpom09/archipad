import { Employee } from './employee.interface';
import { ParticipantInvitationState } from './participant-invitation-state.enum';
import { ParticipantRole } from './participant-role.enum';

export interface ProjectParticipant extends Employee {
  projectId: number;
  role: ParticipantRole;
  state: ParticipantInvitationState;
  address?: string;
}
