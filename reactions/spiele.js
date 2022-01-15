module.exports = {
    name: 'spiele',
    description: "Erstellt ein Embed wo man auswählen kann welche kanäle man sieht.",

    async execute(message, args, Discord, client) {
        if(message.member.permissions.has("ADMINISTRATOR")) {
            const channel = '807308073907257375';
            const ytnotif = message.guild.roles.cache.find(role => role.name === "F1");
            const twnotif = message.guild.roles.cache.find(role => role.name === "AssettoCorsa");
            const twtnotif = message.guild.roles.cache.find(role => role.name === "IRacing");

            const ytnotifEmoji = '🔴';
            const twnotifEmoji = '🟣';
            const twtnotifEmoji = '🔵';

            let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Benachrichtigungen')
            .setAuthor('patrickf1bot', 'https://i.imgur.com/lIhUgVv.png')
            .setDescription('Wenn du mit folgenden Emojis reagierst wirst du benachrichtigt falls Patrick etwas auf denen Postet/Hochlädt.')
            .addFields(
                { name: 'F1', value: 'Wenn du mit 🔴 reagierst erhältst du Zugang zu den F1-Spiele Kanäle.'},
                { name: 'AsettoCorsa', value: 'Wenn du mit 🟣 reagierst erhältst du Zugang zu den Assetto Corsa Kanälen.'},
                { name: 'IRacing', value: 'Wenn du mit 🔵 reagierst erhältst du Zugang zu den IRacing Kanälen.'}
            )
            .setFooter('©HackerLoad', 'https://imgur.com/i0GTz5e.png');
            
            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(ytnotifEmoji);
            messageEmbed.react(twnotifEmoji);
            messageEmbed.react(twtnotifEmoji);

            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;
    
                if(reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === ytnotifEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(ytnotif);
                    }if (reaction.emoji.name === twnotifEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(twnotif);
                    }if (reaction.emoji.name === twtnotifEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(twtnotif);
                    }
                } else {
                    return;
                }
            });

            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;
    
                if(reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === ytnotifEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(ytnotif);
                    }if (reaction.emoji.name === twnotifEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(twnotif);
                    }if (reaction.emoji.name === twtnotifEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(twtnotif);
                    }
                } else {
                    return;
                }
            });
        }
    }
}