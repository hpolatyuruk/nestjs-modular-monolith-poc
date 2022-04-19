import { Injectable } from '@nestjs/common';
import { FacadeOfA } from 'src/module-a/facade-a';

@Injectable()
export class InternalServiceOfB {

  constructor(private readonly facadeA: FacadeOfA) {}

  public async save(param: string): Promise<string> {
    // do smth
    // call smth in module A
    return this.facadeA.doSmth(param);
  }
}