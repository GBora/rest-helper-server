"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
let db = new sqlite3_1.default.Database('./db/rest-helper.db');
class CarsAPI {
    static getAll() {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM CARS`, (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
    }
}
exports.default = CarsAPI;
//# sourceMappingURL=CarsAPI.js.map