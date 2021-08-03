module.exports = {
    name: 'benachrichtigungen',
    description: "Erstellt ein Embed wo man auswählebn kann wo man benachrichtigt wird.",

    async execute(message, args, Discord, client) {
        if(message.member.permissions.has("ADMINISTRATOR")) {
            const channel = '866264470308257823';
            const ytnotif = message.guild.roles.cache.find(role => role.name === "YouTube");
            const twnotif = message.guild.roles.cache.find(role => role.name === "Twitch");
            const twtnotif = message.guild.roles.cache.find(role => role.name === "Twitter");

            const ytnotifEmoji = '🔴';
            const twnotifEmoji = '🟣';
            const twtnotifEmoji = '🔵';

            let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Benachrichtigungen')
            .setAuthor('patrickf1bot', 'https://i.imgur.com/lIhUgVv.png')
            .setDescription('Wenn du mit folgenden Emojis reagierst wirst du benachrichtigt falls Patrick etwas auf denen Postet/Hochlädt.')
            .addFields(
                { name: 'YouTube', value: 'Wenn du mit 🔴 reagierst wirst du benachrichtigt, falls Patrick auf YouTube live gegangen ist oder wenn er etwas hochgeladen hat.'},
                { name: 'Twitch', value: 'Wenn du mit 🟣 reagierst wirst du benachrichtigt, falls Patrick auf Twitch live gegangen ist.'},
                { name: 'Twitter', value: 'Wenn du mit 🔵 reagierst wirst du benachrichtigt, falls Patrick etwas auf Twitter getweeted hat.'}
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