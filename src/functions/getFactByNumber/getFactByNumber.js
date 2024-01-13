'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * Retrieves a SnappleFact by its number.
 * @param {Object} args - The arguments for retrieving the SnappleFact.
 * @param {SnappleFact[]} args.snappleFacts - The array of SnappleFacts to search from.
 * @param {number} args.number - The number of the SnappleFact to retrieve.
 * @returns {SnappleFact | undefined} - The SnappleFact matching the provided number, or undefined if not found.
 * @throws {Error} - Throws an error if the provided number is invalid.
 */
const GetFactByNumber = args => {
  const { snappleFacts, number } = args;
  if (number < 1 || number > snappleFacts.length) throw new Error('Invalid number');
  return snappleFacts.find(fact => fact.number === number);
};
exports.default = GetFactByNumber;
