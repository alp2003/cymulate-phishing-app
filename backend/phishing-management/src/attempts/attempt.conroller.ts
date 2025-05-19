import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AttemptService } from './attempt.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('attempts')
@UseGuards(AuthGuard('jwt'))
export class AttemptController {
  constructor(private readonly attemptService: AttemptService) {}

  @Post()
  create(@Body('email') email: string) {
    return this.attemptService.create(email);
  }

  @Get()
  findAll() {
    return this.attemptService.findAll();
  }
}