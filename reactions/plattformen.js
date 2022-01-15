module.exports = {
    name: 'plattformen',
    descrtiption: "Erstellt ein Embed um die Plattform des Nutzers anzugeben.",
    async execute(message, args, Discord, client) {
        if(message.member.permissions.has("ADMINISTRATOR")) {
            const channel = '877747408740691998';
            const teampc = message.guild.roles.cache.find(role => role.name === "PC");
            const teamps = message.guild.roles.cache.find(role => role.name === "PlayStation");
            const teamxbox = message.guild.roles.cache.find(role => role.name === "XBOX");

            const teampcEmoji = '⚪';
            const teampsEmoji = '🔵';
            const teamxboxEmoji = '🟢';
            
            let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Plattform auswählen')
            .setAuthor('patrickf1bot', 'https://i.imgur.com/lIhUgVv.png')
            .setDescription('Wenn du mit folgenden Emojis reagierst kannst du deine Plattformen wählen.')
            .addFields(
                { name: 'PC', value: 'Wenn du mit ⚪ reagierst wird dir die PC Rolle gegeben.' },
                { name: 'Playstation', value: 'Wenn du mit 🔵 reagierst wird dir die Playstation Rolle gegeben.'},
                { name: 'XBOX', value: 'Wenn du mit 🟢 reagierst wird dir die XBOX Rolle gegeben.'}
            )
            .setFooter('©HackerLoad', 'https://imgur.com/i0GTz5e.png');

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(teampcEmoji);
            messageEmbed.react(teampsEmoji);
            messageEmbed.react(teamxboxEmoji);

            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;
    
                if(reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === teampcEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(teampc);
                    }if (reaction.emoji.name === teampsEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(teamps);
                    }if (reaction.emoji.name === teamxboxEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(teamxbox);
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
                    if (reaction.emoji.name === teampcEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(teampc);
                    }if (reaction.emoji.name === teampsEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(teamps);
                    }if (reaction.emoji.name === teamxboxEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(teamxbox);
                    }
                } else {
                    return;
                }
            });
        }
    }
}