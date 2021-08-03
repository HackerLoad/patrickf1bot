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
            { name: '► §1 - Allgemeines', value: 'Die Regeln gelten als akzeptiert, sobald man auf die Nachricht unterhalb der Regeln reagiert. Dies gilt auch für Freunde und Besucher. Verstöße gegen das Regelwerk werden mit Strafen geahndet.' },
            { name: '► §2 - Verhalten', value: 'Beleidigung, sexuelle Belästigung, Diskriminierung, Hassrede, Rassismus, Hetzerei, Trolling und ähnlich schädliches Verhalten gegenüber einem anderen wird Konsequenzen nach sich ziehen. "Backseat-Gaming" ist in jeder Hinsicht unerwünscht.' },
            { name: '► §3 - Inhalte', value: 'Inhalte in Nicknamen, Profilbildern, im Chat oder darin befindliche Links dürfen nicht pornografisch, gewaltverherrlichend, rassistisch, beleidigend oder illegal sein oder gar die Privatsphäre verletzen.' },
            { name: '► §4 - Inhalte', value: 'Alle Geräusche, die eine Konversation unmöglich machen oder erschweren gelten als Störung. Technische Probleme oder Probleme wie Echos, Rückkopplungen, Rauschen, wiederholte laute und obszöne Geräusche, sowie hörbares Atmen und Essen sind vermeidbare Störquellen.' },
            { name: '► §5 - Streaming & Aufnahme', value: 'Die unangekündigte Aufnahme innerhalb eines Voice-Channels ist verboten. Die Ausnahme gilt, wenn alle im Channel befindlichen Personen der Aufnahme zugestimmt haben.' },
            { name: '► §6 - Werbung', value: 'Werbung ist ohne Absprache mit der Serverleitung verboten. Als Werbung gelten jegliche Links, Videos, Bilder, Texte, Uploads, welche ein werbetechnisches Nutzen verfolgen.' },
            { name: '► §7 - Rechte', value: 'Das Erbetteln von Rechten ist untersagt. Die Vergabe von Serverrollen unterliegt dem Serverteam und kann je nach Bedarf geändert werden.' },
            { name: '► §8 - Weisungsrecht', value: 'Die Mitglieder des Serverteams haben auf dem Server volles Weisungsrecht. Den Anweisungen muss Folge geleistet werden.' },
            { name: '► §9 - letzes Wort', value: 'Die Mitglieder des Serverteams haben auf dem Server das letzte Wort.' },
            { name: '► §10 - Weitere Rechte des Serverteams', value: 'Die Mitglieder des Serverteams haben auf dem Server volles Kontrollrecht. Sie können unangemeldet in einen auch geschützten Channel wechseln oder einzelne Nutzer verschieben, falls die Notwendigkeit dazu gesehen wird. Dieses Recht wird nur unter besonderen Umständen gebraucht und niemals mit der Absicht die Privatsphäre zu stören.' },
            { name: '► §11 - Änderungsvorbehalt', value: 'Wir behalten uns stetig vor diese Regeln zu ändern und/oder sie in einer anderen Form anzuwenden.' },
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