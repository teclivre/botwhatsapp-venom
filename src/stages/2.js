import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const stageTwo = {
  exec({ from, message }) {
    const order =
      '\n----------------------------------------------------\n\n\n \n Para voltar ao menu inicial \n Digite 7️⃣ ';
    //storage[from].itens.push(menu[message]);
     {
      storage[from].stage = 4;
      storage[from].itens = [];

      return (`✅ *Orçamento para:\n ${menu[message].description}* \n Por favor, descreva como poderemos te ajudar?: \n\n\n\n\n----------------------------------------------------\n https://rmfacilities.com.br`
       );
    }
    

   //storage[from].itens.push(menu[message]);
    
     //return (
     // `✅ *Orçamento para ${menu[message].description}*! \n Por favor, descreva como poderemos te ajudar?: \n\n\n\n\n\n\ Para voltar ao início \n Digite 7️⃣ \n\n----------------------------------------------------\n https://rmfacilities.com.br`
   // );
  },
};
