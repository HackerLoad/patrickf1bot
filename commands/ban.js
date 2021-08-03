module.exports = {
    name: 'ban',
    description: "Mit diesem Command kann man Nutzer vom Server bannen!",
    execute(message, args) {
        if(message.member.permissions.has("BAN_MEMBERS")){
            const member = message.mentions.users.first();
            if(member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send('Der Nutzer wurde vom Server gebannt.');
            } else {
                message.channel.send('Dieser Nutzer konnte nicht vom Server gebannt werden.');
            }
        } else {
            message.reply("Du hast nicht die Berechtigungen diesen Command auszuführen.")
        }
    }
}