import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectParticipant } from '../../models/project-participant.interface';
import { ShareProjectFormComponent } from '../share-project-form/share-project-form.component';

import { MatDialog } from '@angular/material/dialog';
import { ProjectConstant } from '../../constants/project.constant';

@Component({
  selector: 'app-participants-table',
  templateUrl: './participants-table.component.html',
  styleUrls: ['./participants-table.component.scss'],
})
export class ParticipantsTableComponent {
  @Input() title!: string;

  @Input() projectId!: number;

  @Input() participants!: ProjectParticipant[];

  @Input() isOwner!: boolean;

  @Output() eventAddItem: EventEmitter<ProjectParticipant> =
    new EventEmitter<ProjectParticipant>();

  displayedColumns: string[] = ProjectConstant.displayedColumns;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ShareProjectFormComponent, {
      width: '100vh',
      data: {
        projectId: this.projectId,
      },
    });

    dialogRef.afterClosed().subscribe((newParticipant: ProjectParticipant) => {
      this.eventAddItem.emit(newParticipant);
    });
  }
}
