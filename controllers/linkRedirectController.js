import Link from "../models/Link.js";
import TelegramShorten from "../models/telegramShortenLink.js";
let handelRedirectLink = async (req, res) => {
  let id = req.params.id;
  try {
    let checkId = await Link.findOne({ shortLink: id });
    if (!checkId) return res.json({ status: "fail", message: "invalid link" });
    let clicks = checkId.totalClicks + 1;
    await Link.updateOne({ shortLink: id }, { $set: { totalClicks: clicks } });
    res.redirect(checkId.ogLink);
  } catch (error) {
    res.send(error.message);
  }
};
let handelTelegramRedirectLink = async (req, res) => {
  let id = req.params.id;
  try {
    let checkId = await TelegramShorten.findOne({ shortLink: id });
    if (!checkId) return res.json({ status: "fail", message: "invalid link" });
    let clicks = checkId.totalClicks + 1;
    await Link.updateOne({ shortLink: id }, { $set: { totalClicks: clicks } });
    res.redirect(checkId.ogLink);
  } catch (error) {
    res.send(error.message);
  }
};

export { handelRedirectLink, handelTelegramRedirectLink };
