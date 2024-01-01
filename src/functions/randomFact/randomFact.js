'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const crypto_1 = __importDefault(require('crypto'));
/**
 * Retrieves a random SnappleFact from the given array of SnappleFacts.
 * @param {SnappleFact[]} snappleFacts - The array of SnappleFacts to choose from.
 * @returns {SnappleFact} - A random SnappleFact.
 */
const RandomFact = snappleFacts => {
  const randomIndex = crypto_1.default.randomInt(0, snappleFacts.length);
  return snappleFacts[randomIndex];
};
exports.default = RandomFact;
