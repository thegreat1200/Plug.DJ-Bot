window.setInterval(function(){
 var promote = false;
 var user;
API.on(API.CHAT, function(data){

var id = data.uid;
var msg = data.message;
var role = API.getUser(id).role;
var wrole = null;

if (role === 5) {
 wrole = "Host";
} else if (role === 4) {
 wrole = "Co-Host";
} else if (role === 3) {
 wrole = "Manager";
} else if (role === 2) {
 wrole = "Bouncer";
} else if (role === 1) {
 wrole = "Resident DJ";
} else {
 wrole = "User";
}

if (!(msg.indexOf("!") === 0) && role < 5 ) {
 API.moderateDeleteChat(data.cid);
 API.sendChat("["+wrole+"] "+data.un+" "+data.message);
}
/*
 method what i use to see emote,message etc. content
if(msg.indexOf("!playnext") == 0 && role >=1){
API.moderateDeleteChat(data.cid);
API.moderateAddDJ(id);
API.moderateMoveDJ(id, 1);
API.sendChat("/me ["+data.un+"] [!playnext] "+data.un+" is playing next.");
}*/
/*
if (msg.indexOf("!admin") == 0 && role >=5) {
   var user = msg.substring(msg.length + 2);
   var user = msg.replace("!admin ", "");
   API.moderateDeleteChat(data.cid);
   API.moderateSetRole(id, API.ROLE.MANAGER);
   API.sendChat("/me ["+data.un+"] User "+user+" is now Admin.");
} else if (msg.indexOf("!developer") && role >=5) {
 var user = msg.replace("!developer ","");
 API.moderateDeleteChat(data.cid);
 API.moderateSetRole(id, API.ROLE.MANAGER);
 API.sendChat("/me ["+data.un+"] User "+user+" is now a Developer.");
} else if (msg.indexOf("!") == 0) {
 API.sendChat("/me ["+data.un+"] ["+data.message+"] Sorry, you eather have no permission or that command does not exist.");
 API.moderateDeleteChat(data.cid);
}*/
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
