'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const randomFact_1 = __importDefault(require('../randomFact'));
describe('RandomFact', () => {
  it('should return a random fact', () => {
    const snappleFacts = [
      { number: 1, fact: 'fact 1' },
      { number: 2, fact: 'fact 2' },
    ];
    const fact = (0, randomFact_1.default)(snappleFacts);
    expect(fact).toBeDefined();
  });
});
