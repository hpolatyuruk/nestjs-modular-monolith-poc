import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleB } from './module-b/module-b.module';
import { ModuleA } from './module-a/module-a.module';

@Module({
  imports: [ModuleB, ModuleA],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
