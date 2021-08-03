const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const status = ["F1 2021"];

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const reactionFiles = fs.readdirSync('./reactions/').filter(file => file.endsWith('.js'));
for(const file of reactionFiles) {
    const command = require(`./reactions/${file}`);
    client.commands.set(command.name, command);
}

const sozialFiles = fs.readdirSync('./sozials/').filter(file => file.endsWith('.js'));
for(const file of sozialFiles) {
    const command = require(`./sozials/${file}`);
    client.commands.set(command.name, command);
}

client.on('guildMemberAdd', guildMember => {
    guildMember.guild.channels.cache.get('866233071584673803').send(`<@${guildMember.user.id}> ist uns gerade beigetreten! Sagt alle hallo!`);
});

client.on('guildMemberRemove', guildMember => {
    guildMember.guild.channels.cache.get('866233071584673803').send(`<@${guildMember.user.id}> hat uns leider Verlassen! Wir werden ihn vermissen.`);
});

client.once('ready', () => {
    console.log('patrickf1bot ist nun bereit!');
    client.user.setActivity(status[0] , {type: "PLAYING"});
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help') {                                //Help
        client.commands.get('help').execute(message, args, Discord, client);
    } else if(command === 'info') {                         //Info
        client.commands.get('info').execute(message, args, Discord, client);
    } else if(command === 'ban') {                          //Ban
        client.commands.get('ban').execute(message, args);
    } else if(command === 'kick') {                         //Kick
        client.commands.get('kick').execute(message, args);
    } else if(command === 'mute') {                         //Mute
        client.commands.get('mute').execute(message, args);
    } else if(command === 'unmute') {                       //Unmute
        client.commands.get('unmute').execute(message, args);
    } else if(command === 'clear') {                        //Clear
        client.commands.get('clear').execute(message, args);
    } else if(command === 'colors') {                       //Colors
        client.commands.get('colors').execute(message, args, Discord, client);
    } else if(command === 'benachrichtigungen') {           //Benachrichtigung
        client.commands.get('benachrichtigungen').execute(message, args, Discord, client);
    } else if(command === 'regeln') {                       //Regeln
        client.commands.get('regeln').execute(message, args, Discord, client);
    } else if(command === 'youtube') {                      //YouTube
        client.commands.get('youtube').execute(message, args);
    } else if(command === 'twitch') {                       //Twitch
        client.command.get('twitch').execute(message, args);
    } else if(command === 'instagram') {                    //Instagram
        client.command.get('instagram').execute(messagem, args);
    }
});

client.login('ODE5NDcxNTkzNzA0MjU5NjE0.YEnGZA.k8nCxEZnH2_He8XvA4UejA6i5VM');