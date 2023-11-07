var express = require("express");
var router = express.Router();

/* POST login. */
router.post("/", function (req, res, next) {
	console.log(req.body);
	var { loginfmt, passwd } = req.body;
	return res.status(200).send({ loginfmt, passwd });
	//   res.render('index', { title: 'Express' });
});

/* GET login. */
router.get("/", function (req, res, next) {
	res.render("password", { title: "Express" });
});

module.exports = router;
