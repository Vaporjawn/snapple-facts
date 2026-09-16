"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomFact = exports.getFactByNumber = exports.listFacts = exports.getFacts = exports.snappleFactsInstance = void 0;
const getFactByNumber_1 = __importDefault(require("./functions/getFactByNumber/getFactByNumber"));
const getFacts_1 = __importDefault(require("./functions/getFacts/getFacts"));
const listFacts_1 = __importDefault(require("./functions/listFacts/listFacts"));
const randomFact_1 = __importDefault(require("./functions/randomFact/randomFact"));
const snappleFacts_1 = __importDefault(require("./snappleFacts"));
class SnappleFacts {
    snappleFacts;
    constructor() {
        this.snappleFacts = snappleFacts_1.default;
    }
    getFacts() {
        return (0, getFacts_1.default)();
    }
    listFacts() {
        return (0, listFacts_1.default)(this.snappleFacts);
    }
    getFactByNumber(number) {
        return (0, getFactByNumber_1.default)({ snappleFacts: this.snappleFacts, number });
    }
    randomFact() {
        return (0, randomFact_1.default)(this.snappleFacts);
    }
}
exports.default = SnappleFacts;
exports.snappleFactsInstance = new SnappleFacts();
const getFacts = () => exports.snappleFactsInstance.getFacts();
exports.getFacts = getFacts;
const listFacts = () => exports.snappleFactsInstance.listFacts();
exports.listFacts = listFacts;
const getFactByNumber = (number) => exports.snappleFactsInstance.getFactByNumber(number);
exports.getFactByNumber = getFactByNumber;
const randomFact = () => exports.snappleFactsInstance.randomFact();
exports.randomFact = randomFact;
//# sourceMappingURL=index.js.map