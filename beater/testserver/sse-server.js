const express = require("express");
const parser = require("body-parser");
const app = express();
const EventEmitter = require("events");
const Stream = new EventEmitter();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get("/events", function (request, response) {
  response.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  Stream.on("push", function (event, data) {
    response.write(
      "event: " +
        String(event) +
        "\n" +
        "data: " +
        JSON.stringify(data) +
        "\n\n"
    );
  });
});

setInterval(function () {
  let msg = {
    frequencies: [
      { band: "63Hz", value: 0 },
      { band: "160Hz", value: 0 },
      { band: "400Hz", value: 0 },
      { band: "1kHz", value: 0 },
      { band: "16kHz", value: 0 },
      { band: "50kHz", value: 0 },
      { band: "100kHz", value: 0 },
    ],
    beatDetected: true,
  };

  msg.frequencies.forEach((item) => {
    item.value = Math.round(Math.random() * 255.0);
  });
  msg.beatDetected = Math.random() > 0.5;

  Stream.emit("push", "message", {
    msg,
  });
}, 500);

app.listen(3010);

console.log("Express E2E mock server is running");
