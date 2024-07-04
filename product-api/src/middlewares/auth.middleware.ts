import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import axios from 'axios';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  url = 'http://localhost:3001/users/can-do';
  constructor(private permission_id: number) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request: Request = context.switchToHttp().getRequest();
      const token = request.headers.authorization;
      if (token == null) {
        throw new UnauthorizedException('El token no existe');
      }
      await axios.get(`${this.url}/${this.permission_id}`, {
        headers: {
          Authorization: token,
        },
      });
      return true;
    } catch (error) {
      throw new UnauthorizedException(error?.message);
    }
  }
}
