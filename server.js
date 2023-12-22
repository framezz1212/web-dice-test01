const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/roll") {
    const number = Math.floor(Math.random() * 6) + 1;
    res.send(JSON.stringify({
      action: "roll",
      number: number
    }));
  } else {
    res.sendStatus(404);
}