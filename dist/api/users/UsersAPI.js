"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
let db = new sqlite3_1.default.Database('./db/rest-helper.db');
class UsersAPI {
    static checkIfUsernameAvailable(username) {
        return new Promise((resolve, reject) => {
            db.get(`SELECT COUNT(*) FROM USERS WHERE USERNAME = "${username}"`, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res['COUNT(*)'] === 0);
            });
        });
    }
}
exports.default = UsersAPI;
//# sourceMappingURL=UsersAPI.js.map