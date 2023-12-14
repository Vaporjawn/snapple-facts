'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const getFacts_1 = __importDefault(require('../getFacts'));
describe('GetFacts', () => {
  it('should return an array of SnappleFacts', () => {
    const facts = (0, getFacts_1.default)();
    expect(facts.length).toBeGreaterThan(0);
  });
  it('should return an array of SnappleFacts with numbers', () => {
    const facts = (0, getFacts_1.default)();
    expect(facts[0].number).toBeDefined();
  });
  it('should return an array of SnappleFacts with facts', () => {
    const facts = (0, getFacts_1.default)();
    expect(facts[0].fact).toBeDefined();
  });
  it('should return an array of SnappleFacts with sources', () => {
    const facts = (0, getFacts_1.default)();
    expect(facts[0].fact).toBeDefined();
  });
  it('should return an array of SnappleFacts with sources', () => {
    const facts = (0, getFacts_1.default)();
    expect(facts[0].fact).toBeDefined();
  });
  it('should return an array of SnappleFacts with sources', () => {
    const facts = (0, getFacts_1.default)();
    expect(facts[0].fact).toBeDefined();
  });
});
