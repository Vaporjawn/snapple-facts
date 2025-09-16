import { SnappleFact } from './interfaces/snappleFact';
declare class SnappleFacts {
    private snappleFacts;
    constructor();
    getFacts(): SnappleFact[];
    listFacts(): string[];
    getFactByNumber(number: number): SnappleFact | undefined;
    randomFact(): SnappleFact;
}
export default SnappleFacts;
export declare const snappleFactsInstance: SnappleFacts;
export declare const getFacts: () => SnappleFact[];
export declare const listFacts: () => string[];
export declare const getFactByNumber: (number: number) => SnappleFact | undefined;
export declare const randomFact: () => SnappleFact;
export { SnappleFact } from './interfaces/snappleFact';
//# sourceMappingURL=index.d.ts.map