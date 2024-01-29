'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * Retrieves an array of fact strings from an array of SnappleFact objects.
 *
 * @param snappleFacts - An array of SnappleFact objects.
 * @returns An array of fact strings.
 */
const ListFacts = snappleFacts => {
  return snappleFacts.map(fact => fact.fact);
};
exports.default = ListFacts;
