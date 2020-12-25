const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Widow Bot Guard Yardım Menüsü')
.setTimestamp()
.addField('» !kanal-koruma', 'Sunucudaki kanalları korur.')
.addField('» !küfür-engel', 'Sunucuda  sadeceyetkililer dışında küfür etme kapanılır.')
.addField('» !reklam-engel', 'Sunucuda sadece yetkililer link atabilir.')
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
  name: 'guard',
  description: 'Guard komutlarını gösterir.',
  usage: 'guard'
};