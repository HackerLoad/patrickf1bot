module.exports = {
    name: 'twitch',
    description: "Sendet ein Embed wo man das Twitch Kanal von Patrick findet.",
    async execute(message, args, Discord, client) {

        const channel = '931878881445687326';

        let embed = new Discord.MessageEmbed()
        .setColor('#8c03fc')
        .setTitle('Twitch Kanal von patrickf1gaming')
        .setAuthor('patrickf1bot', 'https://i.imgur.com/lIhUgVv.png')
        .setDescription('Hier ist ein Link zum Twitch Kanal von patrickf1gaming!')
        .setThumbnail('https://i.imgur.com/lIhUgVv.png')
        .addFields(
            { name: "Link:", value: "https://www.twitch.tv/patrickf1gaming"}    
        )
        .setFooter('©HackerLoad', 'https://imgur.com/i0GTz5e.png');

        await message.channel.send(embed);


    }
 
}   