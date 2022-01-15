module.exports = {
    name: 'info',
    description: "Zeigt Informationen zum Bot!",
    async execute(message, args, Discord, client) {

        const channel = '866236938481303553';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Infos zum patrickf1bot')
        .setAuthor('patrickf1bot', 'https://i.imgur.com/lIhUgVv.png')
        .setDescription('Hier sind infos über den patrickf1bot.')
        .setThumbnail('https://i.imgur.com/lIhUgVv.png')
        .addFields(
            { name: 'Autor', value: 'Der Autor dieses Bots ist HackerLoad' },
            { name: 'Was kann der Bot?', value: 'Der Bot hilft bei der Moderation und ist für das Wohlbefinden des Servers da!' }
        )
        .setFooter('©HackerLoad', 'https://imgur.com/i0GTz5e.png');
        
        let messageEmbed = await message.channel.send(embed);

    }
 
}   