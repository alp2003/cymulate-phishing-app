import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhishingService } from './phishing.service';
import { PhishingController } from './phishing.controller';
import { Attempt, AttemptSchema } from '../schemas/attempt.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Attempt.name, schema: AttemptSchema }]),
  ],
  controllers: [PhishingController],
  providers: [PhishingService],
})
export class PhishingModule {}