import { PrismaService } from '@libs/db-main';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('USERS') private readonly userClient: ClientProxy) {}

  async getData() {
    const obs = this.userClient.send('ALL_USERS', { data: 'nothing' });
    const val = await firstValueFrom(obs);
    console.log('val>>>>', val);
    return val;
  }
}
