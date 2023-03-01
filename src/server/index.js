// This is a prototype script, final version is to be written in Rust.

const PORT = 8080; //HTTPS
const BASE_URL = "/v1";

const Express = require("express");
require("dotenv").config();
let App = Express.app();

App.get(BASE_URL, (Req, Res) => {
  Res.setStatus(200);
  Res.send("{\"api_version\": \"v1\"}");
});

App.listen(PORT, ()=>{
  console.log(`SIMS is listening on port ${PORT}`);
});
