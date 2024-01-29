'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const listFacts_1 = __importDefault(require('../listFacts'));
describe('ListFacts', () => {
  it('should return an array of strings', () => {
    const snappleFacts = [
      { fact: 'Fact 1', number: 1 },
      { fact: 'Fact 2', number: 2 },
      { fact: 'Fact 3', number: 3 },
    ];
    const expected = ['Fact 1', 'Fact 2', 'Fact 3'];
    const actual = (0, listFacts_1.default)(snappleFacts);
    expect(actual).toEqual(expected);
  });
  it('should return an empty array when given an empty array', () => {
    const snappleFacts = [];
    const expected = [];
    const actual = (0, listFacts_1.default)(snappleFacts);
    expect(actual).toEqual(expected);
  });
});
