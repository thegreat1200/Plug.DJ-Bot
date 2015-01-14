(function () {
       
        function activate() {
                API.on(API.CHAT, chatListener);
        }
       
        function deactivate() {
                API.off(API.CHAT, chatListener);
        }
       
        function chatListener(chat) {
                var command = chat.split(" ");
                if(command[0].substring(0, 1) == "!") {
                switch(command[0]) {
                        case "!op":
                                API.sendChat("OP LIST: BLAH");
                                break;
                        case "!kill":
                                deactivate();
                                break;
                        default:
                                //API.sendChat("Command does not exist!");
                }
        }
       
        var bot = {
                startup: function() {
                        activate();
                }
        }
       
}).call(this);
