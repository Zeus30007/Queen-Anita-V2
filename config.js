//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kitsubfox@gmail.com"
global.location = "india, mumbai";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "inida/mumbai";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VamyfNXE50UaQmivaZ27";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VamyfNXE50UaQmivaZ27";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "6283891139988";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUUvMzRQK0FOc2trd1Q1b25FMXF6SzZuYllsWVBUTHEzQU5NTytpMTdHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjNHeWhaTU9Yc1ZKc0lhN2ZtR2ZrRnhMWWt4U3ZtaDBxNHJQcFVZaUxUST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0T3JXNUdWVEl6ZENuZGY5UGFIOGVxRkMrYXRGYmRpQm1TMS9SQnFkUzFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJER285clIwWlZZYm5TbjhHUWg4c2g5TEpIYjEvUWlQajRBTTByWWZldkMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNGVmNiWFo0cGpwVUkvRzczd2lnOGtqN2dkRmhUTnVQM0lJQklJSnpaSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpYWDg3bkJ0N3Z4bXNDbU1TRTMySTlVVWcrdXUrNjZ4eDhtTlhDOW50Mzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUs0ZCswRHhyci9xb1F3SnFUcEZ6L2p4UWtVMGxvcHhDNlpaQzJ4VnpVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzV0ZEk0cVU1eXFyMkR3cmtvbWdSVExjUi9FTVM3OWYyRWU2ejQvaC9Xaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitTK2VDKzQ2S21KalJNN2JmWGVpWGNOV0xsRUZsZjZ4RjNHNTFYWllBMFoyWWFqRWtRbFRvamVBMTJTRzZzTlJEekt6c2pnTVZSZGlVV29xbWRQcmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiJ1dkZLS3ZjclF4SFE5d0VlSDZlVXIvd0FZbDByNXYxTzgxdnBxTm5Lc1VJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MDc2MjQzMjEwMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2MDY5QzQzNjgyQjUwRjBCMTY1REQxQUY1RENDRDI3MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4MjAwMzg5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjA3NjI0MzIxMDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjhCNzM4MTk2OEVGRkNERTJGNzlENTFBQkU5MUQ5QjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODIwMDM4OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUm5vdWZrYkdRNWF4Z1FMTjF4cXoxdyIsInBob25lSWQiOiJmZjczODFlZC04YTA3LTQ1OTYtYWQ0Yi1mODhlZjcxODgwYTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGpXM1NtUFV0aWRMcXl6WXMwNEdUa1FBNlB3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ3eUo4THJVSkcySFl5RDNRUjlPWkpWTUswbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGWjdYVzlSWCIsIm1lIjp7ImlkIjoiMjYwNzYyNDMyMTAyOjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlJZVUsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pXNWs1b0VFTFQ5aUxnR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjgyQXZONHRmdmdnd3VJMUxDTFNZWTBCcUVGU2xCcnFiOVAxSHJ5NE4rMTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVXaDF4VSs4T1luRzJrSVppMUk0MlBscEpoUFZHK3NyTXRCdERrcmQ0REl0MHV3YkVxTGNlNi9mZjFMaWVWcjAvdTdCc3FucVBHUTNHeTVWWWpSUEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlbmJhWldxL1luMzdLeWtpaysxMXdkdnR1OTNpMFV4SHRHZVBib0RRTlJENHhHUUIyb0VwVk4yVk9RazZKZXF4L3NscjlrK1loQ2NSZkhHdjFyQmFpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MDc2MjQzMjEwMjoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmTmdMemVMWDc0SU1MaU5Td2kwbUdOQWFoQlVwUWE2bS9UOVI2OHVEZnRkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MjAwMzg2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpqdyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`MAIKI'S ASSISTANT™`",
  author: process.env.PACK_AUTHER || "MAIKI",
  packname: process.env.PACK_NAME || "×",
  botname: process.env.BOT_NAME || "MAIKI'S ASSISTANT",
  ownername: process.env.OWNER_NAME || "MAIKI IS GLORY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "MAIKI IS GLORY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
