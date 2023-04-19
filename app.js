const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const mydate = new Date();
  const result = addDays(
    new Date(mydate.getFullYear(), mydate.getMonth(), mydate.getDate()),
    100
  );
  response.send(
    "${result.getDate()}/${result.getMonth()+1}/${result.getFullYear()}"
  );
});
module.exports = app;
