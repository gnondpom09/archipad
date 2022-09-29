import { ProjectParticipant } from './project-participant.interface';

export interface Project {
  id: number;
  owner: ProjectParticipant;
}
