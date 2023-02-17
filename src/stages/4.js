import { storage } from '../storage.js';

export const stageFour = {
  exec({ from, message }) {
    const address = storage[from].address;
    const phone = from.split('@');

    storage[from].stage = 5;
    
    let desserts = '';
    const itens = storage[from].itens;
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        desserts += item.description + '.';
      } else {
        desserts += item.description + ', ';
      }
    });
    const total = storage[from].itens.length;

    return `🔔 *Descrição* 🔔 \n📞 Telefone: +${
      phone[0]
    }  \n🔃 Encaminhando você para um atendente. \n⏳ *Aguarde um instante*. \n
    
     🛑 Detalhes: \n *${message}*`;
  },
};
