import { Router, Request, Response, NextFunction } from "express";

const router = Router();

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  next();
};

router.get("/login", (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
    <div>
        <label>Email</label>
        <input name="email" />
    </div>
    <div>
        <label>Password</label>
        <input name="password" type="password" />
    </div>
    <button>Submit</button>
  </form>
  `);
});

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email && password) {
    res.redirect("/");
    res.send(email + password);
  } else {
    res.send("invalid mail or password");
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.body) {
    res.send(`
      <div>
      <a href="/logout" >Logout</a>
      </div>
      `);
  }
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to Protected Route Logged in User.");
});

export { router };
