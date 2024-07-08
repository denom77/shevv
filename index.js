const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1259800867385905243')
        .setType('PLAYING')
        .setURL('https://discord.gg/ZSvn6Zt5uT')
        .setState('& Akun. Aman & Terpercaya')
        .setName('Kei Store')
        .setDetails('Menjual Jasa Top up, Jasa Joki')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1190619079011225670/1259800090323980378/c49e2ffe-b8c6-4be0-82d6-5d5397df6f76.jpg?ex=668cffc3&is=668bae43&hm=ba116753676e9aa1a77b539b53ad59855d1677a14315535e60a7e3dff6743b2e&=&format=webp&width=422&height=422')
        .setAssetsLargeText('Trusted')
        .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1190619079011225670/1259798167516483584/vraje.gif?ex=668cfdf9&is=668bac79&hm=48a6416e5736267e0a698da7a24fad938e0f38c5aed8d7cb39e480ae1b25e1ad&')
        .setAssetsSmallText('Verified')
        .addButton('Join Discord Server', 'https://discord.gg/ZSvn6Zt5uT')
        .addButton('Order? Wa', 'https://wa.me/6282132910644');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);
