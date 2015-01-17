window.setInterval(function(){
  function activate() {
    API.on(API.WAIT_LIST_UPDATE, waitlist(data));
    API.sendChat("[HypixelBot] is online! V. Beta");
    API.setStatus(API.STATUS.AVAILABLE);
  }
  
  function deactivate() {
    API.off(API.WAIT_LIST_UPDATE, waitlist());
    API.sendChat("[HypixelBot] is offline!");
    API.setStatus(API.STATUS.WORKING);
  }
  
  function waitlist(data) {
    API.sendChat("==== Wait List ====");
    API.sendChat("Next: "+API.getWaitlist()[0].)
  }
}, 5000);
