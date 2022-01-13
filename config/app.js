(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1642000252628
//APP_KEY=h2emp5JW6AOgKWLZ-WuDNwcZCa59_YXIM3CtLaZEaNUrd4uX6UW_S83M_RHaI1YLvbBH3DF5N4jWmE0YXtHEJw