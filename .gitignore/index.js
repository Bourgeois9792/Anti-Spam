const Discord = require('discord.js');
const client = new Discord.Client();
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    banThreshold: 4, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 920, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, tu peux arrêter de spamer stp ?.', // Message that will be sent in chat upon warning a user.
    banMessage: "**{user_tag}** je t'es prévenu maintenant t'es bannis.", // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 3, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 4, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ "ADMINISTRATEUR"], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: ['22328536048467968'], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
}); 
client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`));
 
client.on('message', (message) => antiSpam.message(message)); 

client.on("ready", async () =>{
    console.log(" ")
    console.log("Connécté en tant que : " + client.user.tag)
    client.user.setActivity("et check les messages .", {type: "WATCHING"})
})

 
client.login('NjgxOtu reve Ic');
