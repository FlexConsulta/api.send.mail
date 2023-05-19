import nodemailer from 'nodemailer';
import Handlebars from 'handlebars';
import fs from 'fs';
import {config} from 'dotenv';

config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const sendMail = async (to, subject, variables, path) => {
  const templateFileContent = fs.readFileSync(path).toString('utf-8');
  const templateParse = Handlebars.compile(templateFileContent);
  const templateHTML = templateParse(variables);

  await transporter.sendMail({
    to,
    from: process.env.EMAIL_USER,
    subject,
    html: templateHTML
  });
};

export default sendMail;
