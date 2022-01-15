module.exports = {
    name: 'follower',
    description: "Ermöglicht es dem Nutzer auf die Folower Kanäle zuzugreifen.",

    async execute(message, args, Discord, client) {
        if(message.member.permissions.has("ADMINISTRATOR")) {
            const channel = '807308073907257375';
            const follower = message.guild.roles.cache.find(role => role.name === "Follower");

            const followerem = '🟣';

            let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Follower')
            .setAuthor('patrickf1bot', "https://i.imgur.com/lIhUgVv.png")
            .setDescription('Ermöglicht dir auf die Follower Kanäle zuzugreifen.')
            .addFields(
                { name: 'Reagieren um zuzugreifen', value: 'Wenn du mit 🟣 reagierst erhällst du die Follower Rolle.'}
            )
            .setFooter('©HackerLoad', 'https://imgur.com/i0GTz5e.png');

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(followerem);

            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if(!reaction.message.guild) return;

                if(reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === followerem) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(follower);
                    }
                } else {
                    return;
                }
            });

            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if(!reaction.message.guild) return;

                if(reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === followerem) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(follower);
                    }
                } else {
                    return;
                }
            });

        }
    }
}