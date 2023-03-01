const Express = require("express");
let App = Express.app();

App.get("/", (Req, Res) => {
  Res.setStatus(200);
  Res.send("{\"api_version\": \"v1\"}");
});
