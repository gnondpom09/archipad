import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectConstant } from '../../constants/project.constant';
import { ParticipantInvitationState } from '../../models/participant-invitation-state.enum';
import { ParticipantRole } from '../../models/participant-role.enum';
import { ProjectParticipant } from '../../models/project-participant.interface';
import { Project } from '../../models/project.interface';
import { ProjectParticipantService } from '../../services/project-participant/project-participant.service';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  projectId!: number;

  project!: Project | undefined;

  participants!: ProjectParticipant[];

  owners: any[] = [
    {
      userId: 123,
      email: 'laurent@bigsool.com',
      name: 'Laurent Wozniak',
      company: 'Bigsool',
      jobTitle: '',
      role: ParticipantRole.OWNER,
      state: ParticipantInvitationState.ACTIVE,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private projectParticipantService: ProjectParticipantService
  ) {}

  ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));

    this.project = this.projectService.getProjectById(this.projectId);

    this.getParticipants().then((participants: ProjectParticipant[]) => {
      this.participants = participants;
    });
  }

  async getParticipants(): Promise<ProjectParticipant[]> {
    return await this.projectParticipantService.getParticipants(
      ProjectConstant.mockAuthToken,
      this.projectId
    );
  }

  back(): void {
    this.router.navigate(['/projects']);
  }

  async addNewParticipant(newParticipant: any): Promise<void> {
    await this.projectParticipantService.addParticipant(
      ProjectConstant.mockAuthToken,
      this.projectId,
      newParticipant.email,
      newParticipant.name,
      newParticipant.company,
      newParticipant.jobTitle,
      newParticipant.role
    );

    this.participants = await this.projectParticipantService.getParticipants(
      ProjectConstant.mockAuthToken,
      this.projectId
    );
  }
}
