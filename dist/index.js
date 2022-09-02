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
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dbConnect_1 = require("./utils/dbConnect");
const port = process.env.PORT || 4000;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app_1.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            (0, dbConnect_1.dbConnect)(); // temp db connection
        });
    }
    catch (error) {
        console.log(`Server error: ${error}`);
    }
});
startServer();
