import GetFactByNumber from '../getFactByNumber';

describe('getFactByNumber', () => {
  it('should return a fact for a valid number', () => {
    const snappleFacts = [
      { number: 1, fact: 'fact 1' },
      { number: 2, fact: 'fact 2' },
    ];
    const fact = GetFactByNumber({ snappleFacts, number: 1 });
    expect(fact).toEqual({ number: 1, fact: 'fact 1' });
  });

  it('should throw an error for an invalid number', () => {
    const snappleFacts = [
      { number: 1, fact: 'fact 1' },
      { number: 2, fact: 'fact 2' },
    ];
    expect(() => GetFactByNumber({ snappleFacts, number: 3 })).toThrow('Invalid number');
  });
});
