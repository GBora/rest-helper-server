import sqlite3 from 'sqlite3';

let db = new sqlite3.Database('./db/rest-helper.db');

export default class TodosAPI {

    static getAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM TODOS', (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            })
        })
    }

    static getById(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM TODOS WHERE ID = ${id}`, (err, todo) => {
                if (err) {
                    reject(err);
                }
                resolve(todo);
            })
        })
    }

    static create(newTodo: string): Promise<any> {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO TODOS (TEXT, DONE) VALUES ("${newTodo}", 0)`, (err) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                resolve(true)
            })
        })
    }

    static update(newData: any, id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(true);
        })
    }
    
    static deleteById(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM TODOS WHERE ID = ${id}`, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(true)
                }
            })
        })
    }
}