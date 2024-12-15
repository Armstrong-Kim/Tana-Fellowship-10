"use strict";

let define = require("./index.js");
   
define({ 
    express: "express", 
    dirname: () => { return __dirname; },  
    env: () => { return process.env.NODE_ENV || "dev"; },
    app: (express) => { return express(); }
}, (app) => {
    app.get("/", (req, res) => { res.send("Hello World"); });
    app.listen(8008);
});