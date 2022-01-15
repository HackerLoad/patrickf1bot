module.exports = {
    name: 'discord',
    description: "Sendet ein Embed wo man einen Discord Einladungslink zum patrickf1gaming Community Server findet.",
    async execute(message, args, Discord, client) {

        const channel = '931878881445687326';

        let embed = new Discord.MessageEmbed()
        .setColor('#0388fc')
        .setTitle('Discord Einladungslink zum patrickf1gaming Community Server')
        .setAuthor('patrickf1bot', 'https://i.imgur.com/lIhUgVv.png')
        .setDescription('Hier ist ein Einladungslink zum Discord von patrickf1gaming!')
        .setThumbnail('https://i.imgur.com/lIhUgVv.png')
        .addFields(
            { name: "Link:", value: "https://discord.gg/ua4yEkkNqT"}    
        )
        .setFooter('©HackerLoad', 'https://imgur.com/i0GTz5e.png');

        await message.channel.send(embed);


    }
 
}   