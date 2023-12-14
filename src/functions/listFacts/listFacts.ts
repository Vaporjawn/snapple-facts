import { SnappleFact } from '../../interfaces/snappleFact';

const ListFacts = (snappleFacts: SnappleFact[]): string[] => {
  return snappleFacts.map(fact => fact.fact);
};

export default ListFacts;
