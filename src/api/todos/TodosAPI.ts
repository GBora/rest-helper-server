export default class TodosAPI {
    static getAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(true);
        })
    }
    static getById(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(true);
        })
    }
    static create(newTodo: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(true);
        })
    }
    static update(newData: any, id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(true);
        })
    }
}