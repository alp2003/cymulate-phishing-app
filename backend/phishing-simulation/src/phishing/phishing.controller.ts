import { Controller, Post, Body, Get, Param, Res } from '@nestjs/common';
import { PhishingService } from './phishing.service';

@Controller('phishing')
export class PhishingController {
  constructor(private readonly phishingService: PhishingService) {}

  @Post('send')
  async send(@Body('email') email: string) {
    return this.phishingService.sendEmail(email);
  }

  @Get('click/:id')
  async click(@Param('id') id: string, @Res() res) {
    await this.phishingService.markClicked(id);
    res.send('Phishing link clicked.');
  }
}