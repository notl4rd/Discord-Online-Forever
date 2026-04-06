const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
    bot.editStatus("dnd", {
    name: "with my code ✨",   // You can change this to whatever you want
    type: 0,                   // 0 = Playing, 1 = Streaming, 2 = Listening, 3 = Watching, 5 = Competing
  });
  
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
