"use strict";

var Alexa = require("alexa-sdk");

//first step(wake up Alexa)
var handlers = {
  "LaunchRequest": function () {
    this.response.speak("OK, Leave a note. Public or private?").listen("Sorry, please try again"); 
    this.emit(":responseReady");
   },

  'noteIntent': function () {
    var noteLeaving = this.event.request.intent.slots.noteType.value;
    this.response.speak().listen();
    if(noteLeaving=="public"){
      this.response.speak("OK, leave a public note, what is your note").listen();
      this.emit(':responseReady');
      var note=this.event.request.intent.slots.noteContent.value;
      //this.emit(':responseReady');
      if(note=="buy milk"){
         this.response.speak("OK, note have been saved "+note).listen();
      }
    }else if(noteLeaving=="private"){
      this.response.speak("OK, leave a private note").listen();
      ///private note part, haven't done yet.
    }else{
      this.response.speak("Sorry, I can't undertsnand you").listen("please try again");
    }
    
    this.emit(':responseReady');
  },
};


// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  
  // Register Handlers
  alexa.execute();

  // Start our Alexa code
  
};