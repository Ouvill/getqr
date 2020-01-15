import express from "express";
import QRCode from "qrcode";
import stream from "stream";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const string = query.string || query.url;
    if (string) {
      res.contentType("image/png");
      const ps = new stream.PassThrough();
      QRCode.toFileStream(ps, string);
      ps.pipe(res);
    } else {
      res.render("index", { title: "QR Generator" });
    }
  } catch (err) {
    console.error(err);
  }
});

export default router;
