"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get("http://localhost:5000/posts");
        res.status(200).json({ message: "success", data: data });
    }
    catch (err) {
        res.send(500).json({ message: "server error" });
    }
}));
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = {
            title: req.body.title,
            author: req.body.title,
            dates: req.body.dates,
        };
        const response = yield axios_1.default.post("http://localhost:5000/posts", {
            data,
        });
        res.status(200).json(response.data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}));
app.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.get(`http://localhost:5000/posts/${req.params.id}`);
    const newData = data;
    newData.dates.push(req.body.date);
    const request = yield axios_1.default.put(`http://localhost:5000/posts/${req.params.id}`, newData);
    res.status(200).json({ message: "success", data: request.data });
}));
app.listen(4000, () => console.log("Running"));
