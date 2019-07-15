import { IWord } from './iword';

export interface ITextLine {
    boundingBox: number[];
    text: string;
    words: IWord[];
}
