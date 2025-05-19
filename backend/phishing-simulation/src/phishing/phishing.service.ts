import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as nodemailer from 'nodemailer';
import { Attempt } from '../schemas/attempt.schema';
import { v4 as uuidv4 } from 'uuid';
import { InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class PhishingService {
  constructor(
    @InjectModel(Attempt.name) private attemptModel: Model<Attempt>,
  ) {}

  async sendEmail(email: string) {
  try {
    const id = uuidv4();
    const link = `http://localhost:3001/phishing/click/${id}`;

    await this.attemptModel.create({ email, uuid: id, status: 'sent' });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: +process.env.SMTP_PORT!,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: '"PhishSim" <no-reply@phishsim.io>',
      to: email,
      subject: 'Phishing Simulation',
      html: `<p>This is a phishing test. <a href="${link}">Click here</a>.</p>`,
    });

    console.log('Email sent:', info.messageId);
    return { message: 'Email sent', id };
  } catch (error) {
    console.error('💥 Error sending phishing email:', error);
    throw new InternalServerErrorException('Failed to send phishing email');
  }
}

  async markClicked(id: string) {
    await this.attemptModel.findOneAndUpdate({ uuid: id }, { status: 'clicked' });
  }
}