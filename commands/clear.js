module.exports = {
    name: 'clear',
    description: "Dieser Command löscht eine beschtimmte anzahl von Nachrichten.",
    async execute (message, args) {
        if(message.member.permissions.has("KICK_MEMBERS")) {

            if (!args[0]) return message.reply("Bitte gib die Anzahl wieviele Nachrichten ich löschen soll!");
        
            if(isNaN(args[0])) return message.reply("Bitte gib eine Zahl an!");

            if(args[0] > 100) return message.reply("Du kannst nicht mehr als 100 Nachrichten löschen!");

            if(args[0] < 1) return message.reply("Du kannst nicht weniger als 1 Nachricht löschen!");

            await message.channel.messages.fetch({ limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages)
            });
        } else {
            message.reply("Du hast nicht die Berechtigungen diesen Command auszuführen.")
        }
    }
}