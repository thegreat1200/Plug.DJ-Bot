window.setInterval(function(){
API.on(API.USER_JOIN, function(data){
  API.sendChat("User: "+username);
});
}, 5000);
var room = $("#room-name").find(".bar-value").text();
console.log("[thegreat1200Bot] Join is online!");
API.sendChat("/me [thegreat1200Bot] Join is online!");
