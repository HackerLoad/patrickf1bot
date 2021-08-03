module.exports = {
    name: 'kick',
    description: "Mit diesem Command kann man Nutzer vom Server kicken!",
    execute(message, args) {
        if(message.member.permissions.has("KICK_MEMBERS")){
            const member = message.mentions.users.first();
            if(member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send('Der nutzer wurde vom Server gekickt.');
            } else {
                message.channel.send('Dieser Nutzer konnte nicht vom Server gekickt werden.');
            }
        } else {
            message.reply("Du hast nicht die Berechtigungen diesen Command auszuführen.")
        }
    }
}