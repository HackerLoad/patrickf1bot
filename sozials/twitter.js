module.exports = {
    name: 'twitter',
    description: "Sendet ein Embed wo man das Twitter-Profil von Patrick findet.",
    async execute(message, args, Discord, client) {

        const channel = '931878881445687326';

        let embed = new Discord.MessageEmbed()
        .setColor('#0388fc')
        .setTitle('Twitter Profil von patrickf1gaming')
        .setAuthor('patrickf1bot', 'https://i.imgur.com/lIhUgVv.png')
        .setDescription('Hier ist ein Link zum Twitter Profil von patrickf1gaming!')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/de/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png')
        .addFields(
            { name: "Link:", value: "https://twitter.com/patrickf1gaming"}    
        )
        .setFooter('©HackerLoad', 'https://imgur.com/i0GTz5e.png');

        await message.channel.send(embed);


    }
 
}   