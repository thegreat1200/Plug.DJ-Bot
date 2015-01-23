window.setInterval(function(){
  
  function announce(data) {
    if (API.getWaitList()[0].username === null) {
      var show = "Noone";
    } else {
      var show = API.getWaitList()[0].username;
    }
    API.sendChat("=== You are listning to Mineplex ===");
    API.sendChat(API.getWaitList()[0].username+" is playing next.");
    API.sendChat("There are currently: "+API.getUsers().length+" online players.");
  }
  
  function command(data) {
    if (data.message === "!die") {
      disable();
      API.sendChat("["+data.un+"] Has killed the script!.");
    }
  }

function enable() {
  API.on(API.WAIT_LIST_UPDATE, announce(data));
  API.on(API.CHAT, command(data));
}

function disable() {
  API.off(API.WAIT_LIST_UPDATE, announce(data));
  API.off(API.CHAT, command(data));
  API.sendChat("/me [MineplexBot] is now offline!");
}


}, 5000);
enable();
var room = $("#room-name").find(".bar-value").text();
console.log("[MineplexBot] is online! V. Beta");
API.sendChat("/me [MineplexBot] is online! V. Beta");
