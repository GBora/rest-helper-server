"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const db = new sqlite3_1.default.Database("./db/rest-helper.db");
class MessagesAPI {
    static getConversationBetween(user1Id, user2Id) {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM MESSAGES WHERE (SENDER = ${user1Id} AND RECEIVER = ${user2Id}) OR (SENDER = ${user2Id} AND RECEIVER = ${user1Id})`, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }
}
exports.default = MessagesAPI;
//# sourceMappingURL=MessagesAPI.js.map