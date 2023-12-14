import GetFactByNumber from './functions/getFactByNumber/getFactByNumber';
import GetFacts from './functions/getFacts/getFacts';
import ListFacts from './functions/listFacts/listFacts';
import RandomFact from './functions/randomFact/randomFact';
import { SnappleFact } from './interfaces/snappleFact';
import snappleFacts from './snappleFacts';

class SnappleFacts {
  private snappleFacts: SnappleFact[];

  constructor() {
    this.snappleFacts = snappleFacts;
  }

  public getFacts(): SnappleFact[] {
    return GetFacts();
  }

  public listFacts(): string[] {
    return ListFacts(this.snappleFacts);
  }

  public getFactByNumber(number: number): SnappleFact | undefined {
    return GetFactByNumber({ snappleFacts: this.snappleFacts, number });
  }

  public randomFact(): SnappleFact {
    return RandomFact(this.snappleFacts);
  }
}

export default SnappleFacts;
