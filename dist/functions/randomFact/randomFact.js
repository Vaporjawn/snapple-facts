"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const RandomFact = (snappleFacts) => {
    const randomIndex = crypto_1.default.randomInt(0, snappleFacts.length);
    const fact = snappleFacts[randomIndex];
    if (!fact) {
        throw new Error('No facts available');
    }
    return fact;
};
exports.default = RandomFact;
//# sourceMappingURL=randomFact.js.map