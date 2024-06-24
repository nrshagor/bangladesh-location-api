import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RestrictMethodsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const allowedMethodsForSpecificDomain = ['GET', 'POST', 'PATCH', 'DELETE'];
    const specificDomain = 'nrshagor.com';

    // Check the origin of the request
    const origin = req.headers.origin;

    if (req.method !== 'GET') {
      if (origin && origin.includes(specificDomain)) {
        // Allow POST, PATCH, DELETE for the specific domain
        next();
      } else if (allowedMethodsForSpecificDomain.includes(req.method)) {
        // Block POST, PATCH, DELETE for other domains
        throw new HttpException(
          'Method Not Allowed',
          HttpStatus.METHOD_NOT_ALLOWED,
        );
      } else {
        // Allow other methods (e.g., OPTIONS) for all domains
        next();
      }
    } else {
      // Allow GET for all domains
      next();
    }
  }
}
