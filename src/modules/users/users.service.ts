import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { USER_REPOSITORY } from 'src/constants';
import { UserModel } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly usersRepo: typeof UserModel,
  ) {}

  /** Logger instance scoped to UsersService for tracking and recording service-level operations and errors. */
  private logger: Logger = new Logger(UsersService.name);

  /** Handles common error logging and throwing for service methods. */
  private handleError(error: string, errorMsg: string) {
    this.logger.error(error, errorMsg);
    throw new InternalServerErrorException(error, errorMsg);
  }

  public async fetchUserByUsername(username: string): Promise<UserModel> {
    try {
      const result = await this.usersRepo.findOne({ where: { username } });

      if (!result) {
        throw new NotFoundException();
      }

      return result;
    } catch (err: any) {
      this.handleError(`Failed to fetch user record`, err.message);
    }
  }
}
