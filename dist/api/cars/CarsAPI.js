"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
let db = new sqlite3_1.default.Database('./db/rest-helper.db');
class CarsAPI {
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            // return ['1', '2', '3'];
            try {
                let cars = yield db.run('SELECT * FROM CARS');
                console.log('lll', cars);
                return cars;
            }
            catch (_a) {
                console.log('error');
                return Promise.reject();
            }
        });
    }
}
exports.default = CarsAPI;
//# sourceMappingURL=CarsAPI.js.map