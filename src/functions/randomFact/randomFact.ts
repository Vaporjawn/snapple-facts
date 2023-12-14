import { SnappleFact } from '../../interfaces/snappleFact';

/**
 * Retrieves a random SnappleFact from the given array of SnappleFacts.
 * @param {SnappleFact[]} snappleFacts - The array of SnappleFacts to choose from.
 * @returns {SnappleFact} - A random SnappleFact.
 */
const RandomFact = (snappleFacts: SnappleFact[]): SnappleFact => {
  const randomIndex = Math.floor(Math.random() * snappleFacts.length);
  return snappleFacts[randomIndex];
};

export default RandomFact;
