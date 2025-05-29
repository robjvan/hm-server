import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

@Injectable()
export class ElectronicsService {
  constructor() {}

  /** Logger instance scoped to ElectronicsService for tracking and recording service-level operations and errors. */
  private logger: Logger = new Logger(ElectronicsService.name);

  /** Handles common error logging and throwing for service methods. */
  private handleError(error: string, errorMsg: string) {
    this.logger.error(error, errorMsg);
    throw new InternalServerErrorException(error, errorMsg);
  }
}
