import { AuthToken } from '../models/auth-token.interface';
import { Employee } from '../models/employee.interface';

export class ProjectConstant {
  public static mockAuthToken: AuthToken = {
    auth: 'de2c038a-6105-4722-9838-0cdb11eb6602',
  };

  public static displayedColumns: string[] = [
    'email',
    'name',
    'company',
    'state',
    'role',
  ];

  public static allUsers: Employee[] = [
    {
      email: 'laurent@bigsool.com',
      name: 'Laurent Wozniak',
      company: 'Bigsool',
      jobTitle: "Maitre d'oeuvre",
      // projectId: 34567,
      // role: ParticipantRole.OWNER,
      // state: ParticipantInvitationState.ACTIVE,
    },
    {
      email: 'florian@bigsool.com',
      name: 'Florian Girardey',
      company: 'Bigsool',
      jobTitle: "Maitre d'oeuvre",
      // projectId: 34567,
      // role: ParticipantRole.COLLABORATOR,
      // state: ParticipantInvitationState.ACTIVE,
    },
    {
      email: 'thomas@bigsool.com',
      name: 'Thomas Dubois',
      company: 'Bigsool',
      jobTitle: "Maitre d'oeuvre",
      // projectId: 34567,
      // role: ParticipantRole.COLLABORATOR,
      // state: ParticipantInvitationState.PENDING,
    },
    {
      email: 'mic@mac.com',
      name: 'Mic Fast',
      company: 'Électricité Fast',
      jobTitle: 'Électricité',
      // projectId: 34567,
      // role: ParticipantRole.WORKPACKAGE,
      // state: ParticipantInvitationState.ACTIVE,
    },
    {
      email: 'rick@gallant.com',
      name: 'Eric Gallant',
      company: 'Peinture Gallant',
      jobTitle: 'Peinture',
      // projectId: 34567,
      // role: ParticipantRole.WORKPACKAGE,
      // state: ParticipantInvitationState.ACTIVE,
    },
    {
      email: 'gg@gg-plomberie.com',
      name: 'Guillaume Gonzales',
      company: 'Gonzales peinture',
      jobTitle: 'Plomberie',
      // projectId: 34567,
      // role: ParticipantRole.WORKPACKAGE,
      // state: ParticipantInvitationState.ACTIVE,
    },
    {
      email: 'info@cesar-btp.com',
      name: 'JF Cesar',
      company: 'Cesar BTP',
      jobTitle: 'Terrassement',
      // projectId: 34567,
      // role: ParticipantRole.WORKPACKAGE,
      // state: ParticipantInvitationState.PENDING,
    },
  ];
}
