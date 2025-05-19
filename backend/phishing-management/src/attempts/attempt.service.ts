import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';
import { Attempt } from './attempt.schema';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AttemptService {
  constructor(
    @InjectModel(Attempt.name) private attemptModel: Model<Attempt>,
    private readonly httpService: HttpService
  ) {}

  async create(email: string) {
    const res = await firstValueFrom(this.httpService.post('http://localhost:3001/phishing/send', { email }));
    const { id } = res.data;
    return this.attemptModel.create({ email, uuid: id });
  }

  async findAll() {
    return this.attemptModel.find();
  }
}
