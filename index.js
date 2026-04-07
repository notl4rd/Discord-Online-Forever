const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err);
});

bot.on("ready", () => {
  console.log(`✅ Logged in as ${bot.user.username}#${bot.user.discriminator}`);

  // Set status
  bot.editStatus("idle");

  console.log("✅ Status successfully set to idle");
});

bot.connect();
