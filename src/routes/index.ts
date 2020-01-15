import express from "express";
import QRCode from "qrcode";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const string = query.string || query.url;
    if (string) {
      const url = await QRCode.toDataURL(string);
      res.send(url);
    } else {
      res.render("index", { title: "Express" });
    }
  } catch (err) {
    console.error(err);
  }
});

export default router;
