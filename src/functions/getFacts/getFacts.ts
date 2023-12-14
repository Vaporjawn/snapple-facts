import { SnappleFact } from '../../interfaces/snappleFact';
import snappleFacts from '../../snappleFacts';

/**
 * Retrieves an array of Snapple facts.
 * @returns {SnappleFact[]} An array of Snapple facts.
 */
const GetFacts = (): SnappleFact[] => {
  return snappleFacts;
};

export default GetFacts;
