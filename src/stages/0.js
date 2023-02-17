// Para executar o programa digite no terminal npm rum dev

import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '\n ----------------------------------------------------\n 👋🤖 Olá,  é um prazer ter você aqui, a _RM FACILITIES_ a empresa número 1 em prestação de serviços de Portaria, Limpeza e Jardinagem agradece seu contato. Para um atendimento personalizado, escolha uma das opções abaixo. 🤝 \n----------------------------------------------------\n1️⃣ - *ORÇAMENTOS* ✔️ \n2️⃣ - *VAGAS* ✔️\n3️⃣ - *COMPRAS* ✔️   \n0️⃣ - *OUTROS* ✔️ \n\n\n\n----------------------------------------------------\n https://rmfacilities.com.br ';
  },
};

