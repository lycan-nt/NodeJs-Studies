import { Controller, Logger } from '@nestjs/common';
import { GetUserRequest, User, UserServiceController, UserServiceControllerMethods } from '../proto/user/user';

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  private readonly logger = new Logger(UserController.name);
  getUser(request: GetUserRequest): Promise<User> {
    this.logger.log(request);
    const item: User = {
      id: request.id,
      name: 'Geovane',
      isActive: true
    };
    return Promise.resolve(item);
  }
}