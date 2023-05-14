module.exports = {
  Admins: ["457074467319840768", "UserID"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "-", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/kimlong", //Support Server Link
  Token: process.env.Token || "MTA5NzUzMTc1OTA3NzM1OTcwOQ.GpmDus.Mqpf8xof4b8kljo8QKb7HycoFAWCCNA7xG4Okg", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1097531759077359709", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "Ls2j8aS6kb5qcTiTRfnBMtfPZsTaT6m4", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Your mom gay", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 8, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost:3000", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Nghe nhạc cùng Bé Cụt", // The message shown
    type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lavalink2.devamop.in",
    port: 8830, // The port that lavalink is listening to. This must be a number!
    pass: "DevamOP",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "d30ef093edf64dc393b2b8977eaf309f", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "747a650adff040f68a7a540633475cee", //Spotify Client Secret
  },
};
