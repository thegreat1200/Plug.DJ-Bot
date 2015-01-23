window.setInterval(function(){
  
  function command(data) {
    if (data.message === "!die") {
      disable();
      API.sendChat("["+data.un+"] Has killed the script!.");
    }
    if (data.message === "!poll") {
      var arg1 = replace("!poll ","");
      var arg2 = replace(arg1+" ","");
      
    }
  }

function enable() {
  API.on(API.CHAT, command(data));
}

function disable() {
  API.off(API.CHAT, command(data));
  API.sendChat("/me [MineplexBot] is now offline!");
}


}, 5000);
enable();
var room = $("#room-name").find(".bar-value").text();
console.log("[MineplexBot] is online! V. Beta");
API.sendChat("/me [MineplexBot] is online! V. Beta");
