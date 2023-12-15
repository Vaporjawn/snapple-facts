'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * Retrieves a random SnappleFact from the given array of SnappleFacts.
 * @param {SnappleFact[]} snappleFacts - The array of SnappleFacts to choose from.
 * @returns {SnappleFact} - A random SnappleFact.
 */
const RandomFact = snappleFacts => {
  const randomIndex = Math.floor(Math.random() * snappleFacts.length);
  return snappleFacts[randomIndex];
};
exports.default = RandomFact;
