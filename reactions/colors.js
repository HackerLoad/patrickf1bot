module.exports = {
    name: 'colors',
    descrtiption: "Erstellt ein Embed um die Farbe vom Namen zu wechseln.",
    async execute(message, args, Discord, client) {
        if(message.member.permissions.has("ADMINISTRATOR")) {
            const channel = '866260096596836372';
            const colorBlue = message.guild.roles.cache.find(role => role.name === "Blau");
            const colorCyan = message.guild.roles.cache.find(role => role.name === "Türkis");
            const colorGreen = message.guild.roles.cache.find(role => role.name === "Grün");
            const colorPink = message.guild.roles.cache.find(role => role.name === "Pink");
            const colorPurple = message.guild.roles.cache.find(role => role.name === "Lila");
            const colorRed = message.guild.roles.cache.find(role => role.name === "Rot");
            const colorWhite = message.guild.roles.cache.find(role => role.name === "Weiß");
            const colorYellow = message.guild.roles.cache.find(role => role.name === "Gelb");

            const colorBlueEmoji = '🔵';
            const colorCyanEmoji = '🟦';
            const colorGreenEmoji = '🟢';
            const colorPinkEmoji = '🟣';
            const colorPurpleEmoji = '🟪';
            const colorRedEmoji = '🔴';
            const colorWhiteEmoji = '⚪';
            const colorYellowEmoji = '🟡';

            let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Farbe vom Namen wechseln')
            .setAuthor('patrickf1bot', 'https://i.imgur.com/lIhUgVv.png')
            .setDescription('Wenn du mit folgenden Emojis reagierst wird dein Name zu dieser farbe geändert.')
            .addFields(
                { name: 'Blau', value: 'Wenn du mit 🔵 reagierst wird dein Name die Farbe blau bekommen!'},
                { name: 'Türkis', value: 'Wenn du mit 🟦 reagierst wird dein Name die Farbe türkis bekommen!'},
                { name: 'Grün', value: 'Wenn du mit 🟢 reagierst wird dein Name die Farbe grün bekommen!'},
                { name: 'Pink', value: 'Wenn du mit 🟣 reagierst wird dein Name die Farbe pink bekommen!'},
                { name: 'Lila', value: 'Wenn du mit 🟪 reagierst wird dein Name die Farbe lila bekommen!'},
                { name: 'Rot', value: 'Wenn du mit 🔴 reagierst wird dein Name die Farbe rot bekommen!'},
                { name: 'Weiß', value: 'Wenn du mit ⚪ reagierst wird dein Name die Farbe weiß bekommen!'},
                { name: 'Gelb', value: 'Wenn du mit 🟡 reagierst wird dein Name die Farbe yellow bekommen!'}
            )
            .setFooter('©HackerLoad', 'https://imgur.com/i0GTz5e.png');

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(colorBlueEmoji);
            messageEmbed.react(colorCyanEmoji);
            messageEmbed.react(colorGreenEmoji);
            messageEmbed.react(colorPinkEmoji);
            messageEmbed.react(colorPurpleEmoji);
            messageEmbed.react(colorRedEmoji);
            messageEmbed.react(colorWhiteEmoji);
            messageEmbed.react(colorYellowEmoji);

            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;
    
                if(reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === colorBlueEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(colorBlue);
                    }if (reaction.emoji.name === colorCyanEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(colorCyan);
                    }if (reaction.emoji.name === colorGreenEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(colorGreen);
                    }if (reaction.emoji.name === colorPinkEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(colorPink);
                    }if (reaction.emoji.name === colorPurpleEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(colorPurple);
                    }if (reaction.emoji.name === colorRedEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(colorRed);
                    }if (reaction.emoji.name === colorWhiteEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(colorWhite);
                    }if (reaction.emoji.name === colorYellowEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(colorYellow);
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
                    if (reaction.emoji.name === colorBlueEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(colorBlue);
                    }if (reaction.emoji.name === colorCyanEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(colorCyan);
                    }if (reaction.emoji.name === colorGreenEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(colorGreen);
                    }if (reaction.emoji.name === colorPinkEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(colorPink);
                    }if (reaction.emoji.name === colorPurpleEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(colorPurple);
                    }if (reaction.emoji.name === colorRedEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(colorRed);
                    }if (reaction.emoji.name === colorWhiteEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(colorWhite);
                    }if (reaction.emoji.name === colorYellowEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(colorYellow);
                    }
                } else {
                    return;
                }
            });
        }
    }
}