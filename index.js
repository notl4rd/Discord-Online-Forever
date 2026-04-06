const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err);
});

bot.on("ready", () => {
  console.log(`✅ Logged in as ${bot.user.username}#${bot.user.discriminator}`);

  // Set status + activity
  bot.editStatus({
    status: "idle",                    // ← This sets Do Not Disturb
    afk: false,
    activities: [{
      name: "🌊 the sea",             // What the bot is "listening to"
      type: 2,                        // 2 = Listening
      // url: "https://twitch.tv/..." // only needed if type: 1 (Streaming)
    }]
  });

  console.log("✅ Status successfully set to **Do Not Disturb (DND)** with activity");
});

bot.connect();
