const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Widow Bot Eğlence Yardım Menüsü')
.setTimestamp()
.addField('» !aduketçek', 'Etiketlediğiniz kişiye aduket çekersiniz.')
.addField('» !balık-tut', 'Denizde balık tutarsınız.')
.addField('» !beşlik', 'Etiketlediğiniz kişiyle beşlik çakarsınız.')
.addField('» !ara155', 'Polisi aramanıza yarar.')
.addField('» !efkarım', 'Şu anda olan efkarınızı ölçersiniz.')
.addField('» !ejderha-yazı', 'Ejderha temalı logo üretirsiniz.')
.addField('» !espri', 'Bot sizin için espri yapar.')
.addField('» !hesapla', 'Belirttiğiniz matematik işlemini bot yaparz.')
.addField('» !kartopu', 'Etiketlediğiniz kişiye kartopu atarsınız.')
.addField('» !kaç-cm', 'Bot malafat uzunluğunuzu söyler.')
.addField('» !kralol', 'Kral olmanıza yarar.')
.addField('» !tokat', 'Etiketlediğiniz kişiyi tokatlarsınız.')
.addField('» !yılbaşı', 'Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.')
.addField('» !öp', 'Etiketlediğiniz kişiyi öpmenize yarar.')
.addField('» !şekerye', 'Bot size şeker ikram eder.')
.addField('» !atatürk','Atatürkün resmini atar.')
.addField('» !ağla','Botu ağlatırsınız.')
.addField('» !ilginçbilgi','İlginç bir bilgi söyler.')
.addField('» !intihar-et','İntihar eder.')
.addField('» !kahve','Kahve içersiniz.')
.addField('» !renkara','Belirttiğiniz koddaki rengi arar.')
.addField('» !şanslısayım','Şanslı sayını tahmin eder.')
.addField('» !sorusor','Bota bir soru sorarsınız botta cevaplar.')
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
  name: 'eğlence',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence'
};