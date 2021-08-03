module.exports = {
    name: 'youtube',
    description: "Wenn jemand den Command schreibt kommt ein Link zum YouTube Kanal",
    execute(message, args) {
        message.channel.send('Hier ist der YouTube Kanal von Patrick!');
        message.channel.send('https://www.youtube.com/channel/UCPAbc8GGYAwFHUDbxGY971g');
    }
}