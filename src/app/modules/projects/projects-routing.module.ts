import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from '../../components/project-detail/project-detail.component';
import { ProjectListComponent } from '../../components/project-list/project-list.component';
import { ShareProjectFormComponent } from '../../components/share-project-form/share-project-form.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'list',
        component: ProjectListComponent,
      },
      {
        path: ':id',
        component: ProjectDetailComponent,
      },
      {
        path: ':id/share-form',
        component: ShareProjectFormComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
