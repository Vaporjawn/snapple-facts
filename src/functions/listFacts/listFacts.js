"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListFacts = (snappleFacts) => {
    return snappleFacts.map(fact => fact.fact);
};
exports.default = ListFacts;
