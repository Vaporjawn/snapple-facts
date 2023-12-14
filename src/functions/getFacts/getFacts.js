"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snappleFacts_1 = __importDefault(require("../../snappleFacts"));
/**
 * Retrieves an array of Snapple facts.
 * @returns {SnappleFact[]} An array of Snapple facts.
 */
const GetFacts = () => {
    return snappleFacts_1.default;
};
exports.default = GetFacts;
