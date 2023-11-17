import http from "node:http";

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  //   console.log(body)

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }
  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;
    users.push({
      id: 1,
      name,
      email,
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(201).end("Not Found");
});

server.listen(3333);
