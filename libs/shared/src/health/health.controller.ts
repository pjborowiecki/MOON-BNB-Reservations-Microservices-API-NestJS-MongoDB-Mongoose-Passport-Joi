import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthController {
  @Get()
  healthcheck() {
    return true;
  }
}
