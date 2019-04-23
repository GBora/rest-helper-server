import sqlite3 from 'sqlite3';

let db = new sqlite3.Database('./db/rest-helper.db');

class CarsAPI {
    static async getAll(): Promise<any> {
        // return ['1', '2', '3'];
        try {
            let cars = await db.run('SELECT * FROM CARS');
            console.log('lll',cars);
            return cars;
        } catch {
            console.log('error');
            return Promise.reject();
        }
    }
}

export default CarsAPI;