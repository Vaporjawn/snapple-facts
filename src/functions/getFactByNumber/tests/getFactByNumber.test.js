'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const getFactByNumber_1 = __importDefault(require('../getFactByNumber'));
describe('getFactByNumber', () => {
  it('should return a fact for a valid number', () => {
    const snappleFacts = [
      { number: 1, fact: 'fact 1' },
      { number: 2, fact: 'fact 2' },
    ];
    const fact = (0, getFactByNumber_1.default)({ snappleFacts, number: 1 });
    expect(fact).toEqual({ number: 1, fact: 'fact 1' });
  });
  it('should throw an error for an invalid number', () => {
    const snappleFacts = [
      { number: 1, fact: 'fact 1' },
      { number: 2, fact: 'fact 2' },
    ];
    expect(() => (0, getFactByNumber_1.default)({ snappleFacts, number: 3 })).toThrow('Invalid number');
  });
});
