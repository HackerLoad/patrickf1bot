module.exports = {
    name: 'regeln',
    description: "Sendet ein Embed wo die Regeln vermerkt sind",
    async execute(message, args, Discord, client) {
        if(message.member.permissions.has("BAN_MEMBERS")){

        const channel = '866269242444480562';
        const ruleAccepted = message.guild.roles.cache.find(role => role.name === "Member");

        const ruleAcceptedEmoji = '✅';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Regeln des Community Servers von patrickf1gaming')
        .setAuthor('patrickf1bot', 'https://i.imgur.com/lIhUgVv.png')
        .setDescription('Hier sind die Regeln des Community Servers von patrickf1gaming')
        .setThumbnail('https://i.imgur.com/lIhUgVv.png')
        .addFields(
            { name: '§1 Inhalte:', value: 'Inhalte in Namen, Profilbildern, Benutzerinformationen, Stati, Nachrichten und darin enthaltende Links dürfen nicht beleidigend, pornografisch, gewaltverherrlichend, rassistisch, beleidigend oder illegal sein.' },
            { name: '§2 Verhalten:', value: 'Beleidigung, sexuelle Belästigung, Diskriminierung, Hassrede, Rassismus, Hetzerei, Trolling und ähnlich schädliches Verhalten gegenüber einem anderen sind nicht gestattet.' },
            { name: '§3 Spam:', value: 'Das Spammen in Form von Links, denselben Texten oder Emojis wird mit Verwarnungen bestraft und kann zum Bann führen.' },
            { name: '§4 Betrug:', value: '(Identitäts-)Betrug ist untersagt und wird mit einem Bann bestraft.' },
            { name: '§5 Werbung:', value: 'Werbung ist ohne Absprache mit der Serverleitung verboten. Als Werbung gelten jegliche Links, Videos, Bilder, Texte, Uploads, welche ein werbetechnisches Nutzen verfolgen. Dies gilt auch, wenn man einzelnen Mitglieder des Servers werbetechnische Nachrichten per DM abschickt.' },
            { name: '§6 Tickte-Tool:', value: 'Fragen, Anmerkungen, Entbannungsanträge, Beschwerden, etc. gehören ins Ticket-Tool oder den Community Chat, nicht in die DMs der Admins, Moderatoren. Wer das Ticket-Tool missbraucht, wird mit einem Bann bestraft.' },
            { name: '§7 Rechte:', value: 'Das Erbetteln von Rechten ist untersagt. Die Vergabe von Serverrollen unterliegt dem Serverteam und kann je nach Bedarf geändert werden.' },
            { name: '§8 Streaming & Aufnahmen:', value: 'Die unangekündigte Aufnahme innerhalb eines Voice-Channels ist verboten. Die Ausnahme gilt, wenn alle im Channel befindlichen Personen der Aufnahme zugestimmt haben.' },
            { name: '§9 Bann Umgehung:', value: 'Die Umgehung eines Bannes, indem man z.B. einen neuen Account erstellt, ist verboten und kann mit einer Verlängerung des Banns oder permanenten Bann bestraft werden.' },
            { name: '§10 Streamen von Werken:', value: 'Das Streamen von urheberrechtlich geschützten Werken (Filme, Serien, etc.) ohne das Einverständnis des Rechteinhabers ist verboten!' },
            { name: '§11 Rechte des Serverteams:', value: 'Die Mitglieder des Serverteams haben auf dem Server volles Kontrollrecht.'},
            { name: '§12 Änderungsvorbehalt:', value: 'Wir behalten uns stetig vor, diese Regeln zu ändern und/oder sie in einer anderen Form anzuwenden.' },
            { name: 'Weiteres:', value: 'Auf diesem Server gelten weiterhin die Nutzungsbedingungen und Community-Richtlinien von Discord. \n Nutzungsbedingungen: https://discordapp.com/terms \n Community-Richtlinien: https://discordapp.com/guidelines'},
        )
        .setFooter('©HackerLoad', 'https://imgur.com/i0GTz5e.png');

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(ruleAcceptedEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if(reaction.message.channel.id == channel) {
                if (reaction.emoji.name === ruleAcceptedEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ruleAccepted);
                }
            } else {
                return;
            }
        });

        }

    }
 
}   