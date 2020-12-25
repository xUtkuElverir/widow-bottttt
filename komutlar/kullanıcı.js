const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Widow Bot Kullanıcı Yardım Menüsü')
.setTimestamp()
.addField('» !avatar', 'Avatarınızı gösterir.')
.addField('» !ping', 'Botun pingini atar.')
.addField('» !oylama', 'Oylama başlatır.')
.addField('» !davet', 'Botu sunucunuza eklemek için davet linkini atar.')
.addField('» !yetkilerim', 'Sunucudaki yetkilerinizi gösterir.')
.addField('» !afk', 'Afk olursunuz.')
.addField('» !şifre', 'Belirttiğiniz uzunlukta şifre belirler.')
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
  name: 'kullanıcı',
  description: 'Kullanıcıya özel komutları gösterir.',
  usage: 'kullanıcı'
};