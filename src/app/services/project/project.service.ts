import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ParticipantInvitationState } from '../../models/participant-invitation-state.enum';
import { ParticipantRole } from '../../models/participant-role.enum';
import { Project } from '../../models/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectsSubject: BehaviorSubject<Project[]> = new BehaviorSubject<
    Project[]
  >([]);

  public projects$: Observable<Project[]> = this.projectsSubject.asObservable();

  private projects: Project[];

  constructor() {
    this.projects = this.initPojects();
    this.projectsSubject.next(this.projects);
  }

  addProject(project: Project): void {
    this.projects.push(project);
    this.projectsSubject.next(this.projects);
  }

  getProjectById(id: number): Project | undefined {
    const project = this.projects.find((item) => item.id === id);
    return project;
  }

  private initPojects(): Project[] {
    return [
      {
        id: 34567,
        owner: {
          userId: 123,
          email: 'laurent@bigsool.com',
          name: 'Laurent Wozniak',
          company: 'Bigsool',
          projectId: 4342,
          jobTitle: '',
          role: ParticipantRole.OWNER,
          state: ParticipantInvitationState.ACTIVE,
        },
      },
    ];
  }
}
