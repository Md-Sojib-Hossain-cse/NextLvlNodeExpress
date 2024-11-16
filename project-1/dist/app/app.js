"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
//Middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.cookies, req.body, req.hostname);
    next();
};
app.get('/', logger, (req, res) => {
    // console.log(req.params.userId);
    // console.log(req.params.subId);
    console.log(req.query.email);
    console.log(req.query.name);
    res.send('Hello World Bros!');
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({ message: "Successfully received data." });
});
exports.default = app;
