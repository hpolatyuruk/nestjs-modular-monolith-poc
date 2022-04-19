import { Injectable } from '@nestjs/common';
import { InternalServiceOfA } from './services/internal-service-of-a.service';

@Injectable()
export class FacadeOfA {

  constructor(
    private readonly service: InternalServiceOfA) {}

    public async doSmth(param: string): Promise<string> {
      return this.service.save(param);
    }
}