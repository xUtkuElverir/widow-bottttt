const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**şikayet veya öneri için +bildir(şikayet veya öneriniz)** ')

const embed = new Discord.MessageEmbed()
.setTitle("Widow  bildirme Sistemi")
.setColor('BLUE')
.setDescription(`**Hata Bildirilen  Kanal** ${message.channel.name} \n ** Hata Bildirilen Sunucu** \`${message.guild.name}\` \n **Hat Bildiren Kullanıcı** <@${message.author.id}> \n **Bildirilen Bug :** \`${istek}\``)
client.channels.cache.get('791761624263557131').send(embed)
  
message.channel.send("Bildiriminiz, kurucularımıza gönderildi. :white_check_mark:").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bildir',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}