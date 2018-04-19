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
    /// this.response.speak("Alexa take a note.").listen("note"); 
    this.emit(":responseReady");
   }
      //leave note privately
   "privateNode": function(){
        var password=this value, intent, request;
      if(password=="123"){
        this.response.speak("Your password is correct");
        /// this.response.speak("Your password is correct"); 
      }else{
        this.response.speak("Your password is wrong, please try again");
        this.emit(':responseReady');
    }
   }
   //handle the note leaving(last step)
   "noteLeaving": function(){
    this.response.speak("Your note have been leaved ")
    /// this.response.speak("OK, saving your note.")
   }

  'LanguageIntent': function () {
    var noteLeaving = this.event.request.intent.slots.language.value;
    this.response.speak("OK, public or private");
    /// this.response.speak("Public or private?");
    if(noteLeaving=="public"){
      this.response.speak("OK, leave a note publicly, what is your note?");
      /// this.response.speak("OK, what is your note?");
      this.emit(':responseReady');
      noteLeaving();
    }else if(noteLeaving=="private"){
      /// We need to code here to take in a username before a password 
      this.response.speak("OK, what is your password");
      this.emit(':responseReady');
      privateNode();
    }else{
      this.response.speak("I cannot understand you, please try again");
      /// this.response.speak("“I am sorry, I do not recognize that name. Please try again to say the name more clearly or use a different name in the database. What is your name?”");
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
