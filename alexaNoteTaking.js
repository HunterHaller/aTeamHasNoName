"use strict";

var Alexa = require("alexa-sdk");

//first step(wake up Alexa)
var handlers = {
  "HelloIntent": function () {
      this.response.speak("Hello, How can I help you today");
      this.emit(":responseReady");
   },
  
  "LaunchRequest": function () {
    this.response.speak("Leave a note.").listen("note"); 
    this.emit(":responseReady");
   }
      //leave note privately
   "privateNode": function(){
        var password=this value, intent, request;
      if(password=="123"){
        this.response.speak("Your password is correct");
      }else{
        this.response.speak("Your password is wrong, please try again");
        this.emit(':responseReady');
    }
   }
   //handle the note leaving(last step)
   "noteLeaving": function(){
    this.response.speak("Your note have been leaved ")
   }

  'LanguageIntent': function () {
    var noteLeaving = this.event.request.intent.slots.language.value;
    this.response.speak("OK, public or private");
    if(noteLeaving=="public"){
      this.response.speak("OK, leave a note publicly, what is your note?");
      this.emit(':responseReady');
      noteLeaving();
    }else if(noteLeaving=="private"){
      this.response.speak("OK, what is your password");
      this.emit(':responseReady');
      privateNode();
    }else{
      this.response.speak("I cannot understand you, please try again");
      this.emit(':responseReady');
    }
    //enter this if it is private note

    this.emit(':responseReady');
  },


}
};


// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  
  // Register Handlers
  alexa.execute();

  // Start our Alexa code
  
};
