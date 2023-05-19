import {resolve} from 'path';
import sendMail from './mail';
import 'dotenv';

const __dirname = resolve();
const templatePath = resolve(__dirname, 'template.default.hbs');

const mailVariables = {
  name: 'Nome do destinatário',
  body: 'teste de envio de email'
};

const email = 'anaelj@gmail.com';

sendMail(email, 'Assunto do email', mailVariables, templatePath);
