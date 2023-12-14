import { SnappleFact } from '../../interfaces/snappleFact';

const GetFactByNumber = (args: { snappleFacts: SnappleFact[]; number: number }): SnappleFact | undefined => {
  const { snappleFacts, number } = args;
  if (number < 1 || number > snappleFacts.length) throw new Error('Invalid number');
  return snappleFacts.find(fact => fact.number === number);
};

export default GetFactByNumber;
