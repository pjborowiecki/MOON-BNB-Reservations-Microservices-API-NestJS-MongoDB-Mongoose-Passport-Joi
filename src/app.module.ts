import { Module } from '@nestjs/common';

import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';

import { DatabaseModule } from '@app/shared/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
