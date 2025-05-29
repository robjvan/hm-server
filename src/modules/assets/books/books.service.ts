import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor() {}

  /** Logger instance scoped to BooksService for tracking and recording service-level operations and errors. */
  private logger: Logger = new Logger(BooksService.name);

  /** Handles common error logging and throwing for service methods. */
  private handleError(error: string, errorMsg: string) {
    this.logger.error(error, errorMsg);
    throw new InternalServerErrorException(error, errorMsg);
  }
}
