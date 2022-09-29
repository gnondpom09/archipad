import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProjectConstant } from '../../constants/project.constant';
import { Employee } from '../../models/employee.interface';
import { ParticipantRole } from '../../models/participant-role.enum';
import { ProjectParticipant } from '../../models/project-participant.interface';

@Component({
  selector: 'app-share-project-form',
  templateUrl: './share-project-form.component.html',
  styleUrls: ['./share-project-form.component.scss'],
})
export class ShareProjectFormComponent {
  shareForm!: FormGroup;

  users!: Employee[];

  roles = Object.values(ParticipantRole);

  participant!: ProjectParticipant;

  projectId!: number;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ShareProjectFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.users = ProjectConstant.allUsers;
    this.projectId = Number(data.projectId);

    this.shareForm = this.fb.group({
      participant: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      address: new FormControl(''),
    });
  }

  updateForm(participant: ProjectParticipant): void {
    this.participant = participant;

    this.shareForm.patchValue({
      email: this.participant.email,
      role: this.participant.role,
      name: this.participant.name,
      company: this.participant.company,
      address: this.participant.address,
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  addNewParticipant(): void {
    const { email, role, name, company, address } = this.shareForm.controls;

    this.participant = {
      email: email.value,
      role: role.value,
      name: name.value,
      company: company.value,
      address: address.value,
      projectId: this.projectId,
      jobTitle: this.participant.jobTitle,
      state: this.participant.state,
    };

    this.dialogRef.close(this.participant);
  }
}
