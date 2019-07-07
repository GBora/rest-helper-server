import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/rest-helper.db");

class CarsAPI {
    static getAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM CARS`, (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
    }
    static getById(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM CARS WHERE  ID = ${id}`, (err: any, row: any) => {
                if (err) {
                    reject(err);
                }
                resolve(row);
            });
        });
    }
}

export default CarsAPI;