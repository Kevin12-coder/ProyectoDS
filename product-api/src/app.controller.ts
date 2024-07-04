import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { InputExample } from './Input.example';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query: InputExample): string {
    console.log(query)
    return this.appService.getHello();
  }

  @Get('version/:type')
  getVersion(
    @Query() query: { all?: boolean },
    @Param() params: { type: string },
  ): string | { number: number; date: Date; creator: string } {
    return this.appService.getVersion(query, params);
  }
}
