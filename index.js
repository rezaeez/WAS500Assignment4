const express = require("express");
const app = express();
const port = 3000;
const router = require("./router");

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(`Request for page "${req.url}" on ${new Date().toUTCString()}`);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

for (const route in router) {
  app.get(`/${route}.html`, router[route]);
  if (route === "error") {
    app.use(router[route]);
  }
}
