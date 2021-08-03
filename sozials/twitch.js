module.exports = {
    name: 'twitch',
    description: "Wenn jemand den Command schreibt kommt ein Link zum Twitch Kanal",
    execute(message, args) {
        message.channel.send('Hier ist der Twitch Kanal von Patrick!');
        message.channel.send('https://www.twitch.tv/patrickf1gaming');
    }
}