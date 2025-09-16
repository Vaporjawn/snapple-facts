import { SnappleFact } from '../../interfaces/snappleFact';
import crypto from 'crypto';
/**
 * Retrieves a random SnappleFact from the given array of SnappleFacts.
 * @param {SnappleFact[]} snappleFacts - The array of SnappleFacts to choose from.
 * @returns {SnappleFact} - A random SnappleFact.
 */
const RandomFact = (snappleFacts: SnappleFact[]): SnappleFact => {
  const randomIndex = crypto.randomInt(0, snappleFacts.length);
  const fact = snappleFacts[randomIndex];
  if (!fact) {
    throw new Error('No facts available');
  }
  return fact;
};

export default RandomFact;
