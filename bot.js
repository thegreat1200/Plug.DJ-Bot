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
var song = "/me Current Song: "+$("#now-playing-media").find(".bar-value").text();
API.sendChat(song);
var dj = "/me Current DJ: "+API.getDJ().username;
API.sendChat(dj);
var vote = "/me Woots: "+API.getScore().positive+" Grabs: "+API.getScore().grabs+" Mehs: "+API.getScore().negative;
API.sendChat(vote);
var nextdj = "/me Next DJ: "+API.getWaitList()[0].username;
API.sendChat(nextdj);
var pa = "Players Online: "
sa = false;
}
if (time > 23) {
sa = true;
}
}, 5000);
