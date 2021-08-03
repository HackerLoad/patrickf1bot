module.exports = {
    name: 'instagram',
    description: "When someone types the command a link to the Instagram account will be sent!",
    execute(message, args) {
        message.channel.send('Hier ist der Instagram Kanal von Patrick!');
        message.channel.send('https://www.instagram.com/patrickf1gaming/');
    }
}