import { SnappleFact } from '../../interfaces/snappleFact';

const RandomFact = (snappleFacts: SnappleFact[]): SnappleFact => {
  const randomIndex = Math.floor(Math.random() * snappleFacts.length);
  return snappleFacts[randomIndex];
};

export default RandomFact;
