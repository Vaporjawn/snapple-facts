import { SnappleFact } from '../../../interfaces/snappleFact';
import ListFacts from '../listFacts';

describe('ListFacts', () => {
  it('should return an array of strings', () => {
    const snappleFacts: SnappleFact[] = [
      { fact: 'Fact 1', number: 1 },
      { fact: 'Fact 2', number: 2 },
      { fact: 'Fact 3', number: 3 },
    ];
    const expected = ['Fact 1', 'Fact 2', 'Fact 3'];
    const actual = ListFacts(snappleFacts);
    expect(actual).toEqual(expected);
  });

  it('should return an empty array when given an empty array', () => {
    const snappleFacts: SnappleFact[] = [];
    const expected: string[] = [];
    const actual = ListFacts(snappleFacts);
    expect(actual).toEqual(expected);
  });
});
