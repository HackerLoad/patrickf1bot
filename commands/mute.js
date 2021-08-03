module.exports = {
    name: 'mute',
    description: "Dieser Command schaltet einen nutzer Stumm!",
    execute(message, args) {
        if(message.member.permissions.has("MUTE_MEMBERS")) {
            const target = message.mentions.users.first();
            if(target) {
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                if (!args[1]) {
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> wurde Stumm geschaltet!`);
                    return
                }
            } else {
                message.reply("Ich konnte diesen Nutzer nicht finden!");
            }
        } else {
            message.reply("Du hast nicht die Berechtigungen diesen Command auszuführen.");
        }
    }
}