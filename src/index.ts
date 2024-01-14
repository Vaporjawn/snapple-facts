import GetFactByNumber from './functions/getFactByNumber/getFactByNumber';
import GetFacts from './functions/getFacts/getFacts';
import ListFacts from './functions/listFacts/listFacts';
import RandomFact from './functions/randomFact/randomFact';
import { SnappleFact } from './interfaces/snappleFact';
import snappleFacts from './snappleFacts';

const getMissingFactNumbers = (snappleFacts: SnappleFact[]): number[] => {
  const factNumbers = snappleFacts.map(fact => fact.number);
  const missingFactNumbers: number[] = [];

  for (let i = 1; i <= snappleFacts.length; i++) {
    if (!factNumbers.includes(i)) {
      missingFactNumbers.push(i);
    }
  }

  return missingFactNumbers;
};

console.log(getMissingFactNumbers(snappleFacts));
/**
 * Represents a collection of Snapple facts.
 */
class SnappleFacts {
  /**
   * An array of Snapple facts.
   * @type {SnappleFact[]}
   */
  private snappleFacts: SnappleFact[];

  /**
   * Creates a new instance of the class.
   */
  constructor() {
    this.snappleFacts = snappleFacts;
  }

  /**
   * Retrieves an array of Snapple facts.
   *
   * @returns {SnappleFact[]} An array of Snapple facts.
   */
  public getFacts(): SnappleFact[] {
    return GetFacts();
  }

  /**
   * Retrieves a list of Snapple facts.
   *
   * @returns An array of strings representing the Snapple facts.
   */
  public listFacts(): string[] {
    return ListFacts(this.snappleFacts);
  }

  /**
   * Retrieves a SnappleFact by its number.
   * @param number - The number of the SnappleFact to retrieve.
   * @returns The SnappleFact object if found, otherwise undefined.
   */
  public getFactByNumber(number: number): SnappleFact | undefined {
    return GetFactByNumber({ snappleFacts: this.snappleFacts, number });
  }

  /**
   * Retrieves a random SnappleFact from the collection of Snapple facts.
   * @returns {SnappleFact} A random SnappleFact.
   */
  public randomFact(): SnappleFact {
    return RandomFact(this.snappleFacts);
  }
}

export default SnappleFacts;
