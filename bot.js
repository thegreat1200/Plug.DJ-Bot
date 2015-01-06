var sa = true;
window.setInterval(function(){
var time = API.getTimeRemaining();
if (time < 20 && sa == true) {
if (!API.getDJ().username) {
online = API.getAudience().length;
} else {
online = API.getAudience().length + 1;
}

var room = "/me You are listening to "+$("#room-name").find(".bar-value").text()+"'s Plug.DJ";
API.sendChat(room);
var song = "/me Recent Song: "+$("#now-playing-media").find(".bar-value").text();
API.sendChat(song);
var dj = "/me Recent DJ: "+API.getDJ().username;
API.sendChat(dj);
/*
var vote = "/me Woots: "+API.getScore().positive+" Grabs: "+API.getScore().grabs+" Mehs: "+API.getScore().negative;
API.sendChat(vote);
var nextdj = "/me Next DJ: "+API.getWaitList()[0].username;
API.sendChat(nextdj);
*/
var pa = "/me Players Online: "+online;
API.sendChat(pa);
sa = false;
}
if (time > 23) {
sa = true;
}

API.on(API.CHAT, function(data){
if(data.type === "message" && data.message === "!commands"){
API.moderateDeleteChat(data.cid);
API.sendChat(data.un+" sent the !commands command!");
}
});

}, 5000);
var room = $("#room-name").find(".bar-value").text();
console.log("["+room+"Bot] Is now Online!");
API.sendChat("["+room+"Bot] is now Running!");
