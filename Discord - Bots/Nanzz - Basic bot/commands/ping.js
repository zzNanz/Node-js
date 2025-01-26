module.exports = {
  name: "ping",
  description: "Responde pong ao usuario",
  execute(message, client){
    message.reply("Pong!")
  }
}