'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const RandomFact = snappleFacts => {
  const randomIndex = Math.floor(Math.random() * snappleFacts.length);
  return snappleFacts[randomIndex];
};
exports.default = RandomFact;
