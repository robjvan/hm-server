import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

@Injectable()
export class JewelleryService {
  constructor() {}

  /** Logger instance scoped to JewelleryService for tracking and recording service-level operations and errors. */
  private logger: Logger = new Logger(JewelleryService.name);

  /** Handles common error logging and throwing for service methods. */
  private handleError(error: string, errorMsg: string) {
    this.logger.error(error, errorMsg);
    throw new InternalServerErrorException(error, errorMsg);
  }
}
