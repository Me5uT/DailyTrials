import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
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

class Server {
  app: express.Express = express();
  constructor() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(router);
  }

  login(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.send(`
          <div>
              <h1>Hi There!</h1>
          </div>
          `);
    });
  }

  start(): void {
    this.app.listen(3000, () => {
      console.log("Listening on Port 3000.");
    });
  }
}

const server = new Server();
server.login();
server.start();
