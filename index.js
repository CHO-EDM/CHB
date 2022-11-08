const
    discord  = require('discord.js'),
    needle = require('needle'),
    config = require('./config.json')
    bot = new discord.Client()

bot.login(config.token)

bot.on('ready', async() => {
    console.log(`logged in on ${bot.user.username}`)
}) 

bot.on('message', async(message) => {
    if (!message.content.startsWith(config.prefix)) return;
    var args = message.content.substring(config.prefix.length).split(" ")
    switch(args[0]) {
        case "quote":
            var url = await needle("GET", "https://inspirobot.me/api?generate=true")
            var e = new discord.MessageEmbed()
                .setTitle("Random Quote")
                .setImage(url.body)
            message.channel.send(e)
            break;
    }
})