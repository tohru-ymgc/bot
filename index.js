require('dotenv').config();

const { Client, Intents, MessageManager } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //const ch_name = "一般";
    //client.channels.forEach(channel =>{
    //    if(channel.name === ch_name){
    //        channel.send("オンラインになりました。/n::+文字入力でfizzbuzzが起動します。");
    //    };
    //});
});

client.on('message', message => {
    const fizzbuzz = ()=>{
        let messagebox = message.content.replace("::","");
        let check = Number(messagebox);
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
    };
    if(message.author.bot) return;
    if(message.channel.name !== "一般") return;
    if(message.content.indexOf("::") != -1){
        fizzbuzz();
    }

});

client.login(process.env.DISCORD_TOKEN)

