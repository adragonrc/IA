const exprees = require("express");
const router = exprees.Router();

router.get("/", (req, res) =>{
    res.render("index.html", {title: 'IA'});
})


module.exports = router;