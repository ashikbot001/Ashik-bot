const fs = require("fs");
module.exports = {
  config:{
	name: "ashik.mp4",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("ashik😭")==0 || body.indexOf("Ashik😭")==0 || body.indexOf("ashik koi")==0) {
		var msg = {
				body: "আঁমাঁরঁ গঁল্পেঁরঁ বঁইঁয়েঁরঁ ১৭ পৃঁষ্ঠাঁয়ঁ লেঁখাঁ আঁঁছেঁ \nআঁমিঁ কঁখঁনোঁ কাঁরোঁ প্রিঁয়ঁ হঁতেঁ পাঁরিঁনাঁইঁ🙃",
				attachment: fs.createReadStream(__dirname + `/Joy/FB_VID_6369941088315988647.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😊", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
