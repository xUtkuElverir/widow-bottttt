const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Widow Bot Moderasyon Yardım Menüsü')
.setTimestamp()
.addField('» !ban', 'İdsini belirttiğiniz kullanıcıyı sunucudan banlar.')
.addField('» !kick', 'Belirttiğiniz kişiyi sunucudan atar.')
.addField('» !sunucubilgi', 'Sunucunuzun bilgisini gösterir.')
.addField('» !sunucukur', 'Sunucu kurar.')
.addField('» !sa-as', 'Sa as sistemini açar selamın aleyküm & sa dediğiniz saman aleyküm selam der Örnek kullanım : !sa-as aç.')
.addField('» !sil', 'Belirttiğiniz kadar mesajı siler.')
.addField('» !rol-ver', 'Belirttiğiniz kişiye rol verirsiniz.')
.addField('» !emojiekle', 'Sunucuya belirttiğiniz emojiyi ekler.')
.addField('» !isim', 'Belirttiğiniz kişinin ismini değiştirir.')
.addField('» !uyarı', 'Belirttiğiniz kişiyi uyarır.')
.addField('» !slowmode', 'Yavaş mode açar.')
.addField('» !sunucukur2', 'Sunucu kurar.')
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
  name: 'moderasyon',
  description: 'Moderasyon komutlarını gösterir.',
  usage: 'moderasyon'
};