import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/rest-helper.db");

export default class UsersAPI {
    static checkIfUsernameAvailable(username: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            db.get(`SELECT COUNT(*) FROM USERS WHERE USERNAME = "${username}"`, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res["COUNT(*)"] === 0);
            });
        });
    }

    static getAllUsers(): Promise<any> {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM USERS ", (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }
}