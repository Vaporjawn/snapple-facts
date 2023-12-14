"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snappleFacts_json_1 = __importDefault(require("../../snappleFacts.json"));
const GetFacts = () => {
    return snappleFacts_json_1.default.snapplefacts;
};
exports.default = GetFacts;
