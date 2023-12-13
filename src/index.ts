import data from './snappleFacts.json';

export interface SnappleFact {
  fact: string;
  number: number;
}

const snappleFacts: SnappleFact[] = data.snapplefacts;

export default snappleFacts;
