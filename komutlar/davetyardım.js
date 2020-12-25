const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Widow Bot Davet  Yardım Menüsü')
.setTimestamp()
.addField('» !davet-ekle','Belirttiğin kişiye davet eklersin.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
.addField('» !','.')
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
  name: 'davet',
  description: 'davet komutlarını gösterir.',
  usage: 'davet'
};