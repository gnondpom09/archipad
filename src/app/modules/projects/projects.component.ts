import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  logout(): void {
    this.auth.signout();
  }
}
