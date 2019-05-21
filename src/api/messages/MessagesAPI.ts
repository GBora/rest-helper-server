import sqlite3 from 'sqlite3';

let db = new sqlite3.Database('./db/rest-helper.db');

export default class MessagesAPI {
    static getConversationBetween(user1Id: number, user2Id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM MESSAGES WHERE (SENDER = ${user1Id} AND RECEIVER = ${user2Id}) OR (SENDER = ${user2Id} AND RECEIVER = ${user1Id})`, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            })
        })
    }
}