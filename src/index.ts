import express from "express";
import QRCode from "qrcode";

const app = express();

app.get("/", async (req, res) => {
  try {
    const query = req.query;
    const string = query.string || query.url;
    if (string) {
      const url = await QRCode.toDataURL(string);
      res.send(url);
    } else {
    }
  } catch (err) {
    console.error(err);
  }
});

app.listen(3000, () => {
  console.log("server run: http://localhost:3000");
});
