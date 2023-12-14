import { SnappleFact } from '../../interfaces/snappleFact';

/**
 * Retrieves an array of fact strings from an array of SnappleFact objects.
 *
 * @param snappleFacts - An array of SnappleFact objects.
 * @returns An array of fact strings.
 */
const ListFacts = (snappleFacts: SnappleFact[]): string[] => {
  return snappleFacts.map(fact => fact.fact);
};

export default ListFacts;
