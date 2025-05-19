import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';
import { AttemptsModule } from './attempts/attempt.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/phishing-management'),
    AuthModule,
    UsersModule,
    AttemptsModule,
  ],
})
export class AppModule {}