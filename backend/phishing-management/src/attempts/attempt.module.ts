import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { Attempt, AttemptSchema } from './attempt.schema';
import { AttemptController } from './attempt.conroller';
import { AttemptService } from './attempt.service';


@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Attempt.name, schema: AttemptSchema }]),
  ],
  controllers: [AttemptController],
  providers: [AttemptService],
})
export class AttemptsModule {}