require('dotenv').config();

const { Client, Intents, MessageManager } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.name !== "一般") return;
    let check = Number(message.content);
    if (Number.isInteger(check) === false) { 
        message.reply("整数を入力してね。");
    }else if (check%15 === 0) {
            message.reply("fizzbuzz");
        }else if(check%5 === 0) {
                message.reply("buzz");
            }else if(check%3 === 0) {
                message.reply("fizz");
                }else{
                    message.reply(check)
                }
});

client.login(process.env.DISCORD_TOKEN)