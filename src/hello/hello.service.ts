import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello nest JS!';
  }

  getHellowWithName(name: string): string {
    return `Hello ${name}`;
  }
}
 