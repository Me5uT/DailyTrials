"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var body_parser_1 = __importDefault(require("body-parser"));
// import cookieSession from "cookie-session";
// const app = express();
// app.get("/", (req: Request, res: Response) => {
//   res.send(`
//     <div>
//         <h1>Hi There!</h1>
//     </div>
//     `);
// });
// app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(cookieSession);
// app.use(router);
// app.listen(3000, () => {
//   console.log("Listening on Port 3000.");
// });
// with class
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(loginRoutes_1.router);
    }
    Server.prototype.login = function () {
        this.app.get("/", function (req, res) {
            res.send("\n          <div>\n              <h1>Hi There!</h1>\n          </div>\n          ");
        });
    };
    Server.prototype.start = function () {
        this.app.listen(3000, function () {
            console.log("Listening on Port 3000.");
        });
    };
    return Server;
}());
var server = new Server();
server.login();
server.start();
