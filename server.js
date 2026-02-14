const http = require("http");
const next = require("next");

const port = Number.parseInt(process.env.PORT || "3000", 10);
const host = process.env.HOST || "0.0.0.0";
const dev = false;

const app = next({ dev, hostname: host, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    http
      .createServer((req, res) => {
        handle(req, res);
      })
      .listen(port, host, () => {
        console.log(`Server running on http://${host}:${port}`);
      });
  })
  .catch((err) => {
    console.error("Failed to start server", err);
    process.exit(1);
  });
