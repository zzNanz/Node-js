const config = require('../config.json');

module.exports = {
  name: 'messageCreate',
  description: 'Evento de mensagem',
  execute(message, client){
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
    
    const commandName = message.content.slice(config.prefix.length).trim().split(/ +/)[0].toLowerCase();
    const args = message.content.split(commandName)[1].trim()
    if(!client.commands.has(commandName)) return;
    
    try{
      client.commands.get(commandName).execute(message, args, client);
    } catch(error){
      console.error(error);
      message.reply('Ocorreu um erro ao executar o comando');
    }
  }
}