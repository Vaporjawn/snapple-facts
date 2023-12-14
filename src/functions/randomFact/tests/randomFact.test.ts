import RandomFact from '../randomFact';

describe('RandomFact', () => {
  it('should return a random fact', () => {
    const snappleFacts = [
      { number: 1, fact: 'fact 1' },
      { number: 2, fact: 'fact 2' },
    ];
    const fact = RandomFact(snappleFacts);
    expect(fact).toBeDefined();
  });
});
