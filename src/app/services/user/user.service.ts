import { Injectable } from '@angular/core';
import { ProjectConstant } from '../../constants/project.constant';
import { AuthToken } from '../../models/auth-token.interface';

import { User } from '../../models/user.interface';
import { AuthService } from '../auth/auth.service';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private utils: UtilsService, private auth: AuthService) {}

  async login(
    login: string,
    password: string
  ): Promise<{ authToken: AuthToken; user: User }> {
    const userAuth: any = await this.utils.mockSendResult({
      authToken: ProjectConstant.mockAuthToken,
      user: {
        userId: 123,
        login,
        name: 'Laurent Wozniak',
      },
    });

    this.auth.singin(userAuth);

    return userAuth;
  }
}
