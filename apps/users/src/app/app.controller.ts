import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrismaService } from '@libs/db-main';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService
  ) {}

  @MessagePattern('ALL_USERS')
  async users(@Payload() data: any) {
    console.log('Input payload >>>', data);
    const dbResult = await this.prisma.user.findMany();
    console.log('db rsult >>>>', dbResult);
    return dbResult;
  }
}
