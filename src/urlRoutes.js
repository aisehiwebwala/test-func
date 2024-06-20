//Route for /url

const express = require("express");
const router = express.Router();
const data_base = require("./firebase");
const { getDoc, doc } = require("firebase/firestore/lite");

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const resp = await getDoc(doc(data_base, "stream_urls", id));
    res.redirect(resp.data().url);
  } catch (error) {
    console.log({ error });
    res.redirect(
      "https://as1.ftcdn.net/v2/jpg/00/95/83/46/1000_F_95834632_CL4kevuB3WZLoX72MB52KTLJqx4qhvQj.jpg"
    );
  }
});

module.exports = router;
