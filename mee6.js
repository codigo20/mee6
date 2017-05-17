var Discord = require('discord.js');
var akeno = new Discord.Client()

akeno.on('ready', function() {
    console.log("Currently leveling:");
    console.log(akeno.user.username + " " + akeno.user.id)
});

akeno.on('message', function(message) {
    if (message.content === "$lvl") {
      var interval = setInterval (function () {
        message.channel.send("leveling").then (message => message.delete())
      }, 60 * 1000); // 1 minute interval
    }
  });

akeno.login("TOKEN")
