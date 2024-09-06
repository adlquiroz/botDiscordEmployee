//Archivo index.js
const { Client, GatewayIntentBits } = require ("discord.js") ;

//token en config.json
const { token } = require('./config.json');

//Crear nuevo cliente
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//Creando primer evento
client.on('ready', () => {
  console.log(`El bot de Empleos está ahora en linea!  ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(token);



