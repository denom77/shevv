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
        .setApplicationId('1259853425550692433')
        .setType('PLAYING')
        .setURL('https://discord.gg/warmut')
        .setState('Ramai Player')
        .setName('Gta-Samp Multiplayer')
        .setDetails('Server Gta Samp Terbaik')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1253662363501072427/1260111222628683858/b6ca90be-3311-4c6c-954d-f500cf71a46e.jpg?ex=668e2187&is=668cd007&hm=b5784d8be8631ece3249c951664aa0d231f674434ed2192280d5b26117de2d2c&')
        .setAssetsLargeText('Seru Dan Menegangkan')
        .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1253662363501072427/1259856419201486930/wew.gif?ex=668d3439&is=668be2b9&hm=eab3b34a87bcfd3603c0cabc8e8ddc0e168ce1c1fd4e6952c2c6fa7d10d03829&')
        .setAssetsSmallText('Join Sekarang!')
        .addButton('DC Relative Roleplay', 'https://discord.com/invite/relativerp')
        .addButton('Rafz Community', 'https://discord.com/invite/SuXGhD9U');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);
