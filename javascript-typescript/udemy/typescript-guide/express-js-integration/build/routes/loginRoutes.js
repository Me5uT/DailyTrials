"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = (0, express_1.Router)();
exports.router = router;
var requireAuth = function (req, res, next) {
    next();
};
router.get("/login", function (req, res) {
    res.send("\n  <form method=\"POST\">\n    <div>\n        <label>Email</label>\n        <input name=\"email\" />\n    </div>\n    <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" />\n    </div>\n    <button>Submit</button>\n  </form>\n  ");
});
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password) {
        res.redirect("/");
        res.send(email + password);
    }
    else {
        res.send("invalid mail or password");
    }
});
router.get("/", function (req, res) {
    if (req.body) {
        res.send("\n      <div>\n      <a href=\"/logout\" >Logout</a>\n      </div>\n      ");
    }
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("Welcome to Protected Route Logged in User.");
});
