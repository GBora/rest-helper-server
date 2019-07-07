"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const db = new sqlite3_1.default.Database("./db/rest-helper.db");
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
    static getById(id) {
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM CARS WHERE  ID = ${id}`, (err, row) => {
                if (err) {
                    reject(err);
                }
                resolve(row);
            });
        });
    }
}
exports.default = CarsAPI;
//# sourceMappingURL=CarsAPI.js.map