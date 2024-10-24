import formData from 'form-data';
import Mailgun from 'mailgun.js';
import type { IMailgunClient } from 'mailgun.js/Interfaces/MailgunClient';

const mailgun = new Mailgun(formData);

const mg: IMailgunClient = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
  url: 'https://api.mailgun.net',
});

const domain = process.env.MAILGUN_DOMAIN || '';

export interface EmailMessage {
  to: string | string[];
  from?: string;
  subject: string;
  text?: string;
  html?: string;
}

interface MailgunResponse {
  id?: string;
  message?: string;
  status: number;
}

export async function sendEmail(message: EmailMessage): Promise<MailgunResponse> {
  try {
    const mailgunData = {
      from: message.from || `no-reply@${domain}`,
      to: message.to,
      subject: message.subject,
      text: message.text,
      html: message.html
    };

    // Use type assertion since the Mailgun types are overly restrictive
    const response = await mg.messages.create(domain, mailgunData as any);
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}