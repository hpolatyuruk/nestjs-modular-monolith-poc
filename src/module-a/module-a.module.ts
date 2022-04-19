import { Module } from '@nestjs/common';
import { FacadeOfA } from './facade-a';
import { InternalServiceOfA } from './services/internal-service-of-a.service';

Module({
  imports: [],
  controllers: [],
  providers: [InternalServiceOfA],
  exports: [FacadeOfA]
})
export class ModuleA {}