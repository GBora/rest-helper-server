import sqlite3 from 'sqlite3';

let db = new sqlite3.Database('./db/rest-helper.db');

class CarsAPI {
    static getAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM CARS`, (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })
    }
}

export default CarsAPI;