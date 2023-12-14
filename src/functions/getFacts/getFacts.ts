import { SnappleFact } from '../../interfaces/snappleFact';
import data from '../../snappleFacts.json';

const GetFacts = (): SnappleFact[] => {
  return data.snapplefacts;
};

export default GetFacts;
