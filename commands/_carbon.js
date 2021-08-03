/*CMD
  command: /carbon
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🔎 Send Ur Text For Making Carbon Image.*
  keyboard: 
  aliases: 
CMD*/

Api.sendPhoto({
photo: "https://carbonnowsh.herokuapp.com/?code="+message+"",
caption: "*📝 Congrats! Your Carbon Page Is Ready...*",
parse_mode: "markdown"
})
