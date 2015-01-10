window.setInterval(function(){
API.on(API.CHAT, function(data){
var id = data.uid;
var msg = data.message;
var role = API.getUser(id).role;
/* method what i use to see emote,message etc. content*/
if(msg.indexOf("!commands") == 0 && role >=0){
API.moderateDeleteChat(data.cid);
API.sendChat(data.un+" has sent the command!");
}
});
}, 5000);
var room = $("#room-name").find(".bar-value").text();
console.log("[HypixelBot] ETA is online!");
API.sendChat("/me [HypixelBot] ETA is online!");
