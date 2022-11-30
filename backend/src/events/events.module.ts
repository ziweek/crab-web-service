import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';

@Module({
  providers: [EventsGateway, EventsService],
  controllers: [EventsController],
})
export class EventsModule {}
