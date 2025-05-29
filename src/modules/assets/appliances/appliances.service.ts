import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

@Injectable()
export class AppliancesService {
  constructor() {}

  /** Logger instance scoped to AppliancesService for tracking and recording service-level operations and errors. */
  private logger: Logger = new Logger(AppliancesService.name);

  /** Handles common error logging and throwing for service methods. */
  private handleError(error: string, errorMsg: string) {
    this.logger.error(error, errorMsg);
    throw new InternalServerErrorException(error, errorMsg);
  }
}
