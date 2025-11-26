const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Yakın API çalışıyor 🚚");
});

app.post("/api", (req, res) => {
  const { action, payload } = req.body || {};
  console.log("Gelen istek:", action, payload);

  if (action === "PING") {
    return res.json({ ok: true, pong: true });
  }

  return res.json({ ok: false, error: "unknown_action" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server hazir: "+PORT));
