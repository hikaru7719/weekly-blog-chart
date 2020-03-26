"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next_1.default({ dev });
const handle = app.getRequestHandler();
const username = process.env.USER_NAME || "hoge";
const password = process.env.PASSWORD || "hoge";
if (!username || !password) {
    throw new Error("Invalid Environment Variable!! username or password");
}
app.prepare().then(() => {
    const server = express_1.default();
    // server.use(
    //   (
    //     req: express.Request,
    //     res: express.Response,
    //     next: express.NextFunction
    //   ) => {
    //     const user = auth(req);
    //     if (user?.name == username && user.pass === password) {
    //       next();
    //     }
    //     res.set("WWW-Authentication", "Basic");
    //     return res.status(401).send();
    //   }
    // );
    server.get("*", (req, res) => {
        return handle(req, res);
    });
    server.listen(port, err => {
        if (err)
            throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
