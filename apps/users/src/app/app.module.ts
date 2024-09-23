import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbMainModule } from '@libs/db-main';

@Module({
  imports: [DbMainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
