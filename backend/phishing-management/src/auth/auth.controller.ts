import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() data: { email: string; password: string }) {
    return this.authService.register(data.email, data.password);
  }

  @Post('login')
  login(@Body() data: { email: string; password: string }) {
    return this.authService.login(data.email, data.password);
  }
}