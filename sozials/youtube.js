module.exports = {
    name: 'youtube',
    description: "Sendet ein Embed wo man das YouTube Kanal von Patrick findet.",
    async execute(message, args, Discord, client) {

        const channel = '931878881445687326';

        let embed = new Discord.MessageEmbed()
        .setColor('#fc0303')
        .setTitle('YouTube Kanal von patrickf1gaming')
        .setAuthor('patrickf1bot', 'https://i.imgur.com/lIhUgVv.png')
        .setDescription('Hier ist ein Link zum YouTube Kanal von patrickf1gaming!')
        .setThumbnail('https://i.imgur.com/lIhUgVv.png')
        .addFields(
            { name: "Link:", value: "https://www.youtube.com/channel/UCPAbc8GGYAwFHUDbxGY971g"}    
        )
        .setFooter('©HackerLoad', 'https://imgur.com/i0GTz5e.png');

        await message.channel.send(embed);


    }
 
}   