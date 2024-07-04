import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getVersion(
    query: {
      all?: boolean;
    },
    params: {
      type: string;
    },
  ): string | { number: number; date: Date; creator: string } {
    if (params.type === 'raw') {
      return '<h1>Version 1 </h1>';
    }
    if (params.type === 'json') {
      return {
        number: 1,
        date: new Date(),
        creator: 'John P.',
      };
    }
    throw new HttpException('Tipo no encontrado', 404);
  }
}
