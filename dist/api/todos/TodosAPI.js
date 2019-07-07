"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const db = new sqlite3_1.default.Database("./db/rest-helper.db");
class TodosAPI {
    static getAll() {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM TODOS", (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
    }
    static getById(id) {
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM TODOS WHERE ID = ${id}`, (err, todo) => {
                if (err) {
                    reject(err);
                }
                resolve(todo);
            });
        });
    }
    static create(newTodo) {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO TODOS (TEXT, DONE) VALUES ("${newTodo}", 0)`, (err) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                resolve(true);
            });
        });
    }
    static update(newTodo, newDone, id) {
        return new Promise((resolve, reject) => {
            console.log(`UPDATE TODOS SET TEXT = "${newTodo}", DONE = ${newDone} WHERE ID = ${id}`);
            db.run(`UPDATE TODOS SET TEXT = "${newTodo}", DONE = ${newDone} WHERE ID = ${id}`, (err) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                resolve(true);
            });
        });
    }
    static deleteById(id) {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM TODOS WHERE ID = ${id}`, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
}
exports.default = TodosAPI;
//# sourceMappingURL=TodosAPI.js.map