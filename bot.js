const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const  db  = require('wio.db')


var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//komutlar

//Sa as

client.on('message', async (msg, member, guild) => {
  
    let i = await  db.fetch(`saas_${msg.guild.id}`)
    
    if(i === 'açık') {
      
    if (msg.content.toLowerCase() === 'sa'){
              
    msg.reply('Aleyküm Selam, Hoşgeldin ');    
    }
      
    }
    });
    
    client.on('message', async (msg, member, guild) => {
      
    let i = await  db.fetch(`saas_${msg.guild.id}`)
    
    if(i === 'açık') {
      
    if (msg.content.toLowerCase() === 'hi'){
              
    msg.reply('Hi welcome ');    
    }
      
    }
    });

    //küfür engel

    client.on("message", async msg => {
  
  
        let a = await db.fetch(`kufur_${msg.guild.id}`)
          if (a == 'acik') {
            const küfür = [
              "yarak","mk", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git","31","ananın amına yarak"
                        ]
                  if (küfür.some(word => msg.content.includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                        msg.delete();
                                
                          return msg.channel.send(`Kufur Etme !`).then(msg => msg.delete(10000));
                  }              
                      } catch(err) {
                        console.log(err);
                      }
                    }
                }
                if (!a) return;
                })

    //reklam engel

    client.on("message", async message => {
  
        const lus = await db.fetch(`reklamengel_${message.guild.id}`)
        if (lus) {
          const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https", "http", ".com.tr", ".org", ".tr", ".gl", "glicht.me/", ".rf.gd", ".biz", "www.", "www"];
          if (reklamengel.some(word => message.content.toLowerCase().includes(word))) {
            try {
              if (!message.member.permissions.has('KICK_MEMBERS')) {
                message.delete();
                
                return message.reply('Hey Dur! Bu Sunucuda Reklamı Engelliyorum').then(message => message.delete(3000));
                
              }
            } catch(err) {
              console.log(err);
          }
        }
      }
      if (!lus) return;
      });
      client.on("messageUpdate", async message => {
        
        const lus = await db.fetch(`reklamengel_${message.guild.id}`)
        if (lus) {
          const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https", "http", ".com.tr", ".org", ".tr", ".gl", "glicht.me/", ".rf.gd", ".biz", "www.", "www"];
          if (reklamengel.some(word => message.content.toLowerCase().includes(word))) {
            try {
              if (!message.member.permissions.has('KICK_MEMBERS')) {
                message.delete();
                
                return message.reply('Hey Dur! Bu Sunucuda Reklamı Engelliyorum').then(message => message.delete(3000));
                
              }
            } catch(err) {
              console.log(err);
          }
        }
      }
      if (!lus) return;
      });

      //kanal koruma

      client.on("channelDelete", async function(channel) {
        let rol = await db.fetch(`kanalk_${channel.guild.id}`);
      
      if (rol) {
    const guild = channel.guild.cache;
    let channelp = channel.parentID;
    
      channel.clone().then(z => {
        let kanal = z.guild.channels.find(c => c.name === z.name);
        kanal.setParent(
          kanal.guild.channels.find(channel => channel.id === channelp)
          
        );
      });
      }
    })

    //afk

    client.on("message" , async msg => {
  
      if(!msg.guild) return;
      if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
      
      let afk = msg.mentions.users.first()
      
      const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
      
      const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
     if(afk){
       const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
       const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
       if(msg.content.includes(kisi3)){
    
           msg.reply(`Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`)
       }
     }
      if(msg.author.id === kisi){
    
           msg.reply(`Afk'lıktan Çıktınız`)
       db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
       db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
       db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
        msg.member.setNickname(isim)
        
      }
      
    });

    //otorol ol artık aq

    