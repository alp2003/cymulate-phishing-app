import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(email: string, password: string) {
    return this.userModel.create({ email, password });
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }
}