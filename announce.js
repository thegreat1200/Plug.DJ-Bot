window.setInterval(function(){
API.on(API.ADVANCE, function(data){
  API.sendChat("You are listning to Hypixel Network!");
  API.sendChat("Next Song: "+data.media.title+" By: "+data.media.author);
  API.sendChat("Next DJ: @"+data.dj.username);
});
}, 5000);
var room = $("#room-name").find(".bar-value").text();
console.log("[HypixelBot] Announcer is online!");
API.sendChat("/me [HypixelBot] Announcer is online!");
