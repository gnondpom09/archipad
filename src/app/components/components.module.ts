import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoginComponent } from './login/login.component';
import { ShareProjectFormComponent } from './share-project-form/share-project-form.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ParticipantsTableComponent } from './participants-table/participants-table.component';

@NgModule({
  declarations: [
    LoginComponent,
    ShareProjectFormComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ParticipantsTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    LoginComponent,
    ShareProjectFormComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    ParticipantsTableComponent,
    MatProgressSpinnerModule,
  ],
})
export class ComponentsModule {}
