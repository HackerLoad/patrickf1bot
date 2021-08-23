module.exports = {
    name: 'wheels',
    description: "Zeigt alle Wheels die Patrick empfiehlt/besitzt hatte.",
    async execute(message, args, Discord, client) {
        
        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Lenkrad empfehlungen von Patrick')
        .setAuthor('patrickf1bot', 'https://i.imgur.com/lIhUgVv.png')
        .setDescription('Zeigt alle Lenkräder die Patrick empfiehlt/besitzt hatte.')
        .addFields(
            { name: '1. Fanatec CSL Elite F1 2019', value: 'Das Lenkrad das Patrick zurzeit nutzt.' },
            { name: '2. Thrustmaster T300 RS', value: 'Empfohlen für Spieler die schon erfahrung haben. Add-Ons: Thrustmaster Open Wheel, F1 Ferrari Wheel' },
            { name: '3. Thrustmaster T150', value: 'Empfohlen für Anfänger.'}
        )
        .setFooter('©HackerLoad', 'https://i.imgur.com/i0GTz5e.jpeg');

        let messageEmbed = await message.channel.send(embed);

    }
}