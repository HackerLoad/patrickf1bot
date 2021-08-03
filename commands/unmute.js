module.exports = {
    name: 'unmute',
    description: "Dieser Command entfernt die Stummschaltung eines Nutzers!",
    execute(message, args) {
        if(message.member.permissions.has("MUTE_MEMBERS")) {
            const target = message.mentions.users.first();
            if(target) {
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> wurde entstummt!`)
            } else {
                message.reply("Ich konnte diesen Nutzer nicht finden!");
            }
        } else {
            message.reply("Du hast nicht die Berechtigungen diesen Command auszuführen.");
        }
    }
}