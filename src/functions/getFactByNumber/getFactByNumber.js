"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetFactByNumber = (args) => {
    const { snappleFacts, number } = args;
    if (number < 1 || number > snappleFacts.length)
        throw new Error('Invalid number');
    return snappleFacts.find(fact => fact.number === number);
};
exports.default = GetFactByNumber;
