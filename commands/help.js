module.exports = {
    name: 'help',
    description: "Zeigt die Commands des Bots!",
    async execute(message, args, Discord, client) {

        const channel = '866235676647096370';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Commands des patrickf1bot')
        .setAuthor('patrickf1bot', 'https://i.imgur.com/lIhUgVv.png')
        .setDescription('Hier sind die Commands vom patrickf1bot')
        .setThumbnail('https://i.imgur.com/lIhUgVv.png')
        .addFields(
            { name: '!youtube', value: 'Schickt einen Link zum YouTube-Kanal von Patrick.' },
            { name: '!twitch', value: 'Schickt einen Link zum Twitch-Kanal von Patrick.' },
            { name: '!instagram', value: 'Schickt einen Link zum Instagram Profil von Patrick.' },
            { name: '!twitter', value: 'Schickt einen Link zum Twitter von Patrick.' },
            { name: '!lenkrad', value: 'Schickt den Namen und einen Link zum Lenkrad das Patrick zurzeit nutzt.' },
            { name: '!wheels', value: 'Zeigt alle Lenkräder die Patrick empfiehlt/benutzt hatte.' },
            { name: '!discord', value: 'Schickt einen Einladungslink zum Discord!' }
        )
        .setFooter('Das Serverteam', 'https://i.imgur.com/lIhUgVv.png');
        
        let messageEmbed = await message.channel.send(embed);

    }
 
}   