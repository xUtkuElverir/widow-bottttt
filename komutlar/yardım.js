const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Widow Bot Yardım Menüsü')
.setTimestamp()
.setDescription(`

Yardım komutları **!eğlence,!moderasyon,!guard,!moderasyon,!yardım** dır.
Örnek komut kullanımı: \`!sa-as aç\`
Botu davet etmek için: \`!davet\`
`)
.addField('» !moderasyon', 'Moderasyon komutlarını gösterir.')
.addField('» !guard', 'Guard komutlarını gösterir.')
.addField('» !kullanıcı', 'Kullanıcıya özel komutları gösterir.')
.addField('» !eğlence', 'Eğlence komutlarını gösterir.')
.setFooter('© 2020 Widow Bot', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};