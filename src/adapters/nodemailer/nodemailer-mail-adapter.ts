import { MailAdapter, sendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: { 
      user: "ccad92dded4d23",
      pass: "59af62c9bfe82e"
    }
});

export class nodemailerAdapter implements MailAdapter{
    async sendMail({subject, body}: sendMailData) {
        await transport.sendMail({
            from : 'Equipe Feedget <Oi@feedget.com>',
            to: 'Eduardo Schwanke <carvalhoe089@gmail.com>',
            subject: subject,
            html: body,
        })
    };
}