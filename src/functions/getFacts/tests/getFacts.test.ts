import GetFacts from '../getFacts';

describe('GetFacts', () => {
  it('should return an array of SnappleFacts', () => {
    const facts = GetFacts();
    expect(facts.length).toBeGreaterThan(0);
  });

  it('should return an array of SnappleFacts with numbers', () => {
    const facts = GetFacts();
    expect(facts[0].number).toBeDefined();
  });

  it('should return an array of SnappleFacts with facts', () => {
    const facts = GetFacts();
    expect(facts[0].fact).toBeDefined();
  });

  it('should return an array of SnappleFacts with sources', () => {
    const facts = GetFacts();
    expect(facts[0].fact).toBeDefined();
  });

});
