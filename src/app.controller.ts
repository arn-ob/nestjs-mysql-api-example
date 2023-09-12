import { Controller, Get } from '@nestjs/common';

// service
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.pingPong();
  }
}
