'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const getFactByNumber_1 = __importDefault(require('./functions/getFactByNumber/getFactByNumber'));
const getFacts_1 = __importDefault(require('./functions/getFacts/getFacts'));
const listFacts_1 = __importDefault(require('./functions/listFacts/listFacts'));
const randomFact_1 = __importDefault(require('./functions/randomFact/randomFact'));
const snappleFacts_json_1 = __importDefault(require('./snappleFacts.json'));
class SnappleFacts {
  constructor() {
    this.snappleFacts = snappleFacts_json_1.default.snapplefacts;
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
