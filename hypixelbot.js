window.setInterval(function(){
API.on(API.CHAT, function(data){

var id = data.uid;
var msg = data.message;
var role = API.getUser(id).role;
/*
 method what i use to see emote,message etc. content
if(msg.indexOf("!playnext") == 0 && role >=1){
API.moderateDeleteChat(data.cid);
API.moderateAddDJ(id);
API.moderateMoveDJ(id, 1);
API.sendChat("/me ["+data.un+"] [!playnext] "+data.un+" is playing next.");
}*/

if (msg.indexOf("!promote") == 0 && role >=5) {
   var user = msg.substring(msg.length + 2);
   API.sendChat(user);
}
});
/*
if (msg && role >= 0) {
  if (data.un !== API.getUser().username) {
    API.moderateDeleteChat(data.cid);
    API.sendChat("["+role+"] "+data.un+" "+data.message);
  }
}
});*/
/*
API.on(API.USER_JOIN, function(data){
  if (API.hasPermission(data.id, API.ROLE.DJ)) {
    API.sendChat("[DJ] "+data.username+" has joined!");
  } else if (API.hasPermission(data.id, API.ROLE.BOUNCER)) {
    API.sendChat("[Bouncer] "+data.username+" has joined!");
  } else if (API.hasPermission(data.id, API.ROLE.MANAGER)) {
    API.sendChat("[Manager] "+data.username+" has joined!");
  } else if (API.hasPermission(data.id, API.ROLE.COHOST)) {
    API.sendChat("[Co-Host] "+data.username+" has joined!");
  } else if (API.hasPermission(data.id, API.ROLE.HOST)) {
    API.sendChat("[Host] "+data.username+" has joined!");
  }
});*/

}, 5000);
var room = $("#room-name").find(".bar-value").text();
console.log("[HypixelBot] is online! V. Beta");
API.sendChat("/me [HypixelBot] is online! V. Beta");
