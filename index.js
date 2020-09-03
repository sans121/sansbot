const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('ready', () => {
  client.user.setPresence({
        activity: {
            name: "himself dunk on megalomaniacs",
            type: "WATCHING",
        }, status: 'dunking on megalomaniacs'
    });
})
client.on('message', (msg) => {
  if (msg.author.id == "621007300752310309" && msg.content == "!night") {
    client.destroy()
  };
})
client.login('NzQ5NTQzNjQ5NDk4MzY1OTYy.X0tg6w.G9HQz6XmkF1TZgAjyhBKQcKHr3w');
