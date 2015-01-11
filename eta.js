window.setInterval(function(){
API.on(API.CHAT, function(data){
var id = data.uid;
var msg = data.message;
var role = API.getUser(id).role;
/* method what i use to see emote,message etc. content*/
if(msg.indexOf("!playnext") == 0 && role >=1){
API.moderateDeleteChat(data.cid);
API.moderateAddDJ(id);
API.moderateMoveDJ(id, 1);
API.sendChat("/me ["+data.un+"] [!playnext] "+data.un+" is playing next.");
}
});

API.on(API.USER_JOIN, function(data){
  API.sendChat("/me Welcome back, "+data.username);
});

API.on(API.USER_LEAVE, function(data){
  API.sendChat("/me Bye, "+data.username);
});

}, 5000);
var room = $("#room-name").find(".bar-value").text();
console.log("[HypixelBot] is online!");
API.sendChat("/me [HypixelBot] is online!");
