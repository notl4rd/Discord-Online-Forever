const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});


bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.username}`);

  bot.setStatus("idle", {
    name: "🌊 the sea",   // You can change this to whatever you want
    type: 2,                   // 0 = Playing, 1 = Streaming, 2 = Listening, 3 = Watching, 5 = Competing
  });

  console.log("Status set to Do Not Disturb (DND)");
});

bot.connect(); // Get the bot to connect to Discord
