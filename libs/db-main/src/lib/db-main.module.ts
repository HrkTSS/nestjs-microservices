import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DbMainModule {}
