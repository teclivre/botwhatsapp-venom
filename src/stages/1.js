import { menu } from '../menu.js';
import { storage } from '../storage.js';
import { neighborhoods } from './neighborhoods.js';


export const stageOne = {
  exec({ from, message, client }) {
    if (message === '1') {
      let msg = '🤖ASSITENTE VIRTUAL🤖 \n ------------------------------------------------------\n  *Qual serviço deseja orçamento?*  \n\n';

      Object.keys(menu).map((value) => {
        const element = menu[value];
        if (value === '1') {
          msg += `1️⃣ - _${element.description}_ \n`;
        } else if (value === '2') {
          msg += `2️⃣ - _${element.description}_ \n`;
        } else if (value === '3') {
          msg += `3️⃣ - _${element.description}_ \n`;
        } else if (value === '4') {
          msg += `4️⃣ - _${element.description}_ \n`;
        } else if (value === '5') {
          msg += `5️⃣ - _${element.description}_ \n`;
        }
      });

      msg +=
        '\n\n----------------------------------------------------\n https://rmfacilities.com.br ';
      storage[from].stage = 2;

      return msg;
    } else if (message === '2') {
      storage[from].stage = 0;
      return (
         '🤖 ASSISTENTE VIRTUAL🤖 \n----------------------------------------------------\n\n\n' + neighborhoods + '\n----------------------------------------------------\n  https://rmfacilities.com.br '
      );
    } else if (message === '0') {
      client.markUnseenMessage(from);

      storage[from].stage = 5;

      return '🤖 ASSISTENTE VIRTUAL🤖\n----------------------------------------------------\n\n🔃 Encaminhando você para um atendente. \n⏳ *Aguarde um instante*.';
    } else if (message === '3'){
        storage[from].stage = 0
        return (
            'Para compras entrar em contato pelo *e-mail*: \n compras@rmfacilities.com.br \n\n\n *Obrigado por seu contato.* \n----------------------------------------------------\n https://rmfacilities.com.br'

        );
          
    } else{
        storage[from].stage = 0
      return(
        '🤖 ASSISTENTE VIRTUAL🤖 \n Opção invalida. \nPor favor, escolha uma das opções. \n----------------------------------------------------\n 👋 Olá, é um prazer ter você aqui, a _RM FACILITIES_ a empresa número 1 em prestação de serviços de Portaria, Limpeza e Jardinagem agradece seu contato. Para um atendimento personalizado, escolha uma das opções abaixo. 🤝 \n----------------------------------------------------\n1️⃣ - *ORÇAMENTOS* ✔️ \n2️⃣ - *VAGAS* ✔️\n3️⃣ - *COMPRAS* ✔️   \n0️⃣ - *OUTROS* ✔️ \n\n\n\n----------------------------------------------------\n https://rmfacilities.com.br '
      )
    }
    
  },
};
