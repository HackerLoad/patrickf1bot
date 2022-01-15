module.exports = {
    name: 'instagram',
    description: "Sendet ein Embed wo man das Instagramm-Profil von Patrick findet.",
    async execute(message, args, Discord, client) {

        const channel = '931878881445687326';

        let embed = new Discord.MessageEmbed()
        .setColor('#fc037f')
        .setTitle('Instagramm Profil von patrickf1gaming')
        .setAuthor('patrickf1bot', 'https://i.imgur.com/lIhUgVv.png')
        .setDescription('Hier ist ein Link zum Instagramm Profil von patrickf1gaming!')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png')
        .addFields(
            { name: "Link:", value: "https://www.instagram.com/patrickf1gaming"}    
        )
        .setFooter('©HackerLoad', 'https://imgur.com/i0GTz5e.png');

        await message.channel.send(embed);


    }
 
}   