const Discord = require("discord.js")
exports.run = async(client, message, args) => {

const embed = new Discord.MessageEmbed()
.setThumbnail("https://cdn.discordapp.com/attachments/786250366320508968/790917179264598066/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.png")   
.addField("Selam, beni buradan davet edebilirsin","[TIKLA](https://discord.com/api/oauth2/authorize?client_id=790910858066395136&permissions=8&scope=bot)")
message.channel.send(embed);
  };

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };

  module.exports.help = {
    name: "davet",
    description: "Davet linki",
    usage: "Davet Linki"
  };