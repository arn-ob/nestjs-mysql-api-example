import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  pingPong(): string {
    return 'ping pong';
  }
}
