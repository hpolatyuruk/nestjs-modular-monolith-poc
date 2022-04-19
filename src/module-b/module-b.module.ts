import { Module } from '@nestjs/common';
import { ModuleA } from 'src/module-a/module-a.module';
import { FacadeB } from './facade-b';
import { InternalServiceOfB } from './services/internal-service-of-b.service';

Module({
  imports: [ModuleA],
  controllers: [],
  providers: [InternalServiceOfB],
  exports: [FacadeB]
})
export class ModuleB {}