import { Router } from "express";

const loginRouter = Router();

loginRouter.get("/", (req, res) => res.send(req.user));

export { loginRouter };