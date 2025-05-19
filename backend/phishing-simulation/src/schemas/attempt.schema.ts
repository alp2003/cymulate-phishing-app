import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Attempt extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  uuid: string;

  @Prop({ default: 'sent' })
  status: string;
}

export const AttemptSchema = SchemaFactory.createForClass(Attempt);