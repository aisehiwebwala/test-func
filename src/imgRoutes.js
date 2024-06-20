//Route for /img

const express = require("express");
const router = express.Router();
const data_base = require("./firebase");
const { getDoc, doc } = require("firebase/firestore/lite");

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const resp = await getDoc(doc(data_base, "stream_urls", id));
    const url = resp.data().url;
    if (!url)
      return res.redirect(
        "https://www.guidingtech.com/wp-content/uploads/Top-Ways-to-Fix-No-App-Found-to-Open-URL-Error-on-Android-2.jpg"
      );

    res.redirect(
      "https://t4.ftcdn.net/jpg/05/09/96/71/360_F_509967154_SxP5oGfK7imqJXezihVIbWq9k0i21gwE.jpg"
    );
  } catch (error) {
    console.log({error})
    res.redirect(
      "https://as1.ftcdn.net/v2/jpg/00/95/83/46/1000_F_95834632_CL4kevuB3WZLoX72MB52KTLJqx4qhvQj.jpg"
    );
  }
});

module.exports = router;
