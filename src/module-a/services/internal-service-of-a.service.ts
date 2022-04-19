import { Injectable } from '@nestjs/common';

@Injectable()
export class InternalServiceOfA {
  public async save(param: string): Promise<string> {
    return Promise.resolve(param);
  }
}