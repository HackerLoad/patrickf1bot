module.exports = {
    name: 'lenkrad',
    description: "Schickt den Namen und einen Link zum Lenkrad das Patrick zurzeit nutzt.",
    execute(message, args) {
        message.channel.send('Patrick nutzt zurzeit das Fanatec CSL Elite F1 2019 Lenkrad.')
        message.channel.send('https://fanatec.com/eu-de/')
    }
}