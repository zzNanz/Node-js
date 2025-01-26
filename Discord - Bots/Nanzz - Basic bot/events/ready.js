module.exports = {
  name: 'ready',
  once: true,
  description: 'Evento de inicialização do bot',
  execute(args, client){
    console.log("I'm Ready! " + client.user.tag);
  }
}