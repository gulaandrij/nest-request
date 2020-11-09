import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IsUserClientConstraint } from './is-user-client.constraint';
import { IsUserClientWorkingConstraint } from './is-user-client-working.constraint';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [IsUserClientConstraint, IsUserClientWorkingConstraint, AppService],
})
export class AppModule {}
