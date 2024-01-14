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
const snappleFacts_1 = __importDefault(require('./snappleFacts'));
/**
 * Represents a collection of Snapple facts.
 */
class SnappleFacts {
  /**
   * Creates a new instance of the class.
   */
  constructor() {
    this.snappleFacts = snappleFacts_1.default;
  }
  /**
   * Retrieves an array of Snapple facts.
   *
   * @returns {SnappleFact[]} An array of Snapple facts.
   */
  getFacts() {
    return (0, getFacts_1.default)();
  }
  /**
   * Retrieves a list of Snapple facts.
   *
   * @returns An array of strings representing the Snapple facts.
   */
  listFacts() {
    return (0, listFacts_1.default)(this.snappleFacts);
  }
  /**
   * Retrieves a SnappleFact by its number.
   * @param number - The number of the SnappleFact to retrieve.
   * @returns The SnappleFact object if found, otherwise undefined.
   */
  getFactByNumber(number) {
    return (0, getFactByNumber_1.default)({ snappleFacts: this.snappleFacts, number });
  }
  /**
   * Retrieves a random SnappleFact from the collection of Snapple facts.
   * @returns {SnappleFact} A random SnappleFact.
   */
  randomFact() {
    return (0, randomFact_1.default)(this.snappleFacts);
  }
}
exports.default = SnappleFacts;
