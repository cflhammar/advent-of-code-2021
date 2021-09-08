export interface IRule {
  matches: (number: number) => boolean;
  word: string;
}
