console.log(`
██╗    ██╗██╗ ██████╗██╗  ██╗    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ 
██║    ██║██║██╔════╝██║ ██╔╝    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
██║ █╗ ██║██║██║     █████╔╝     ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
██║███╗██║██║██║     ██╔═██╗     ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
╚███╔███╔╝██║╚██████╗██║  ██╗    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
 ╚══╝╚══╝ ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ 
`);


const { Client, GatewayIntentBits } = require('discord.js');
const { token, translationChannelId, targetLanguage, languagesToDetect } = require('./config');
const translate = require('google-translate-api-browser').default;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Code by Wick Studio`);
  console.log(`discord.gg/wicks`);
});

async function translateMessage(content, toLang) {
  try {
    const translation = await translate(content, { to: toLang });
    return { text: translation.text, detectedLanguage: translation.from.language.iso };
  } catch (error) {
    console.error('Error while translating:', error);
    return { text: 'Error occurred while translating the message.', detectedLanguage: '' };
  }
}

client.on('messageCreate', async (message) => {
  if (message.author.bot || message.channel.id !== translationChannelId) return;

  const { text: translatedMessage, detectedLanguage } = await translateMessage(message.content, targetLanguage);
  
  if (languagesToDetect.includes(detectedLanguage)) {
    await message.reply(translatedMessage);
  }
});

client.login(token);
